import {
	EventEmitter,
	ElementRef,
	ComponentRef,
	TemplateRef,
	Renderer2,
	ComponentFactoryResolver,
	ComponentFactory,
	Injector,
	ApplicationRef,
	AfterViewInit,
	OnDestroy,
	OnChanges,
	Input

} from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

import { NzbPopupStatus } from './nzb-popup-status.enum';
import { NzbDynamicContentComponent } from '../dynamic-content/nzb-dynamic-content.component';
import { NzbPopupOptions } from './nzb-popup-options.class';
import { NzbPopoverOptions } from './nzb-popover-options.class';
import { NzbTooltipOptions } from './nzb-tooltip-options.class';
declare const jQuery: any;

export abstract class NzbPopup implements AfterViewInit, OnDestroy, OnChanges {
	protected titleComponentRef: ComponentRef<NzbDynamicContentComponent>;
	protected contentComponentRef: ComponentRef<NzbDynamicContentComponent>;
	private factory: ComponentFactory<NzbDynamicContentComponent>;

	protected options: NzbPopoverOptions | NzbTooltipOptions;

	private showTriggerUnlisteners: any[];
	private hideTriggerUnlisteners: any[];

	/**
	 * Passes on the native Bootstrap `show.bs.*` event
	 * @type {EventEmitter<any>}
	 */
	onShow: EventEmitter<any>;

	/**
	 * Passes on the native Bootstrap `shown.bs.*` event
	 * @type {EventEmitter<any>}
	 */
	onShown: EventEmitter<any>;

	/**
	 * Passes on the native Bootstrap `hide.bs.*` event
	 * @type {EventEmitter<any>}
	 */
	onHide: EventEmitter<any>;

	/**
	 * Passes on the native Bootstrap `hidden.bs.*` event
	 * @type {EventEmitter<any>}
	 */
	onHidden: EventEmitter<any>;







	/**
	 * The status.
	 * @protected
	 * @type {BehaviorSubject<NzbModalStatus>}
	 */
	protected statusSubject: BehaviorSubject<NzbPopupStatus>;

	get status(): NzbPopupStatus{
		return this.statusSubject.value;
	}



	get statusObservable(): Observable<NzbPopupStatus>{
		return this.statusSubject.asObservable()
	}



	constructor (
		protected bootstrapComponentName: 'popover' | 'tooltip',
		protected cfr: ComponentFactoryResolver,
		protected injector: Injector,
		protected appRef: ApplicationRef,
		protected renderer: Renderer2,
		protected element: ElementRef,
		protected injectedOptions: any
	) {
		this.factory = this.cfr.resolveComponentFactory(NzbDynamicContentComponent);
		this.onShow = new EventEmitter();
		this.onShown = new EventEmitter();
		this.onHide = new EventEmitter();
		this.onHidden = new EventEmitter();
		this.statusSubject = new BehaviorSubject(NzbPopupStatus.uninitialized);
	}


	protected abstract getInstanceOptions(): any;


	protected updateOptions() {
		let instanceOptions: any = this.getInstanceOptions() || {};
		let injectedOptions = this.injectedOptions || {}
		let merged = Object.assign({}, injectedOptions, instanceOptions);
		this.options = this.bootstrapComponentName === 'tooltip' ?
			new NzbTooltipOptions() : new NzbPopoverOptions();
		this.options.normalize(merged);

		const $el = jQuery(this.element.nativeElement);
		const bsPopup = $el.data('bs.' + this.bootstrapComponentName);
		if (! bsPopup){
			return;
		}
		bsPopup.config.placement = this.options.placement;
		bsPopup.config.animation = this.options.animation;

	}


	protected getBootstrapEvents(): string[] {
		const phases = ['show', 'shown', 'hide', 'hidden'];
		return phases.map ((phase:string) => {
			return phase + '.bs.' + this.bootstrapComponentName;
		});
	}

	protected initializeBootstrapEvents (target: ElementRef): void {
		const events = this.getBootstrapEvents();
		const $el = jQuery(target.nativeElement);
		$el.on(events.join(' '), (event: any) => {
			switch (event.type) {
				case 'show':
					this.setHideTriggers();
					this.statusSubject.next(NzbPopupStatus.showing);
					this.onShow.emit(event);
					break;
				case 'shown':
					this.statusSubject.next(NzbPopupStatus.shown);
					this.onShown.emit(event);
					break;
				case 'hide':
					this.statusSubject.next(NzbPopupStatus.hiding);
					this.onHide.emit(event);
					break;
				case 'hidden':
					this.statusSubject.next(NzbPopupStatus.hidden);
					this.onHidden.emit(event);
					break;
			}
		});
	}
	protected destroyBootstrapEvents (target: ElementRef): void {
		const events = this.getBootstrapEvents();
		const $el = jQuery(target.nativeElement);
		$el.off(events.join(' '));
	}


	protected initializeShowTriggers(): string | null {
		let f;
		this.showTriggerUnlisteners = [];

		if (! this.options.trigger){
			return null;
		}
		if (this.options.trigger !== 'clickOutside') {
			return this.options.trigger;
		}

		f = this.renderer.listen(this.element.nativeElement, 'click', (event: any) => {
			const shown = this.statusSubject.value === NzbPopupStatus.shown;
			const hidden = this.statusSubject.value === NzbPopupStatus.hidden;
			if (shown){
				this.hide();
				return
			}
			if (hidden){
				this.show();
				return
			}

		})
		this.showTriggerUnlisteners.push(f);
		return 'manual';
	}

	protected setHideTriggers(): void {
		let f;
		this.hideTriggerUnlisteners = [];

		if (! this.options.trigger){
			return;
		}
		if (this.options.trigger !== 'clickOutside') {
			return;
		}

		const maybeHide = (event:any) => {
			const $el = jQuery(this.element.nativeElement);
			const shown = this.statusSubject.value === NzbPopupStatus.shown;
			if (! shown){
				return;
			}
			const bsPopup = $el.data('bs.' + this.bootstrapComponentName);
			if (! bsPopup) {
				return;
			}
			const tip = bsPopup.tip;
			const isIn = jQuery.contains(tip, event.target);
			if (isIn) {
				return;
			}
			this.hideTriggerUnlisteners.forEach((f: any) => {
				f.call();
			});
			this.hideTriggerUnlisteners = [];
			this.hide();
		}

		f = this.renderer.listen(document.body, 'click', maybeHide);
		this.hideTriggerUnlisteners.push(f);
		f = this.renderer.listen(document.body, 'focusin', maybeHide);
		this.hideTriggerUnlisteners.push(f);
	}
	protected updateComponents() {
		setTimeout(() => {
			const context = {popup: this}
			if (this.titleComponentRef){
				this.titleComponentRef.instance.updateContent(this.options.title, context);
			}
			if (this.contentComponentRef && this.options instanceof NzbPopoverOptions){
				this.contentComponentRef.instance.updateContent(this.options.content, context);
			}
		});

	}

	protected createDynamicContentComponent(): ComponentRef<NzbDynamicContentComponent> {
		const componentRef = this.factory.create(this.injector);
		this.appRef.attachView(componentRef.hostView);
		return componentRef;
	}

	protected initTitleComponent(): void {
		this.titleComponentRef = this.createDynamicContentComponent();
	}
	protected initContentComponent(): void {
		this.contentComponentRef = this.createDynamicContentComponent();
	}






	ngAfterViewInit() {
		setTimeout(() => {
			this.updateOptions();
			const $el = jQuery(this.element.nativeElement);
			const attr = this.element.nativeElement.attributes.title
			const originalTitle = attr ? attr.value : '';
			const trigger = this.initializeShowTriggers();
			let options: any;
			if (originalTitle.length > 0){
				if (! this.options.title){
					this.options.title = originalTitle;
				}
			}
			this.renderer.setAttribute(this.element.nativeElement, 'data-title-popup', originalTitle)
			this.renderer.removeAttribute(this.element.nativeElement, 'title');
			this.initializeBootstrapEvents(this.element);
			this.initTitleComponent();
			if ('popover' === this.bootstrapComponentName){
				this.initContentComponent();
			}
			this.updateComponents();

			options = {
				html: true,
				title: this.titleComponentRef.location.nativeElement,
				animation: this.options.animation,
				container: this.options.container,
				delay: this.options.delay,
				placement: this.options.placement,
				template: this.options.template,
				constraints: this.options.constraints,
				offset: this.options.offset
			}
			if (trigger) {
				options.trigger = trigger;
			}
			if ('popover' === this.bootstrapComponentName){
				options.content = this.contentComponentRef.location.nativeElement;
				$el.popover(options);
			} else {
				$el.tooltip(options);
			}

			this.statusSubject.next(NzbPopupStatus.hidden);
		})
	}

	ngOnDestroy() {
		const $el = jQuery(this.element.nativeElement);
		this.destroyBootstrapEvents(this.element);
		this.hideTriggerUnlisteners.forEach((f: any) => {
			f.call();
		});
		this.hideTriggerUnlisteners = [];
		this.showTriggerUnlisteners.forEach((f: any) => {
			f.call();
		});
		this.showTriggerUnlisteners = [];
		if ('popover' === this.bootstrapComponentName){
			$el.popover('dispose');
		} else {
			$el.tooltip('dispose');
		}
	}

	ngOnChanges() {
		this.updateOptions();
		this.updateComponents();
	}


	show(): Promise<void> {
		const p = this.shown();
		const $el = jQuery(this.element.nativeElement);
		if ('popover' === this.bootstrapComponentName){
			$el.popover('show');
		} else {
			$el.tooltip('show');
		}
		return p;

	}

	hide(): Promise<void> {
		const p = this.hidden();
		const $el = jQuery(this.element.nativeElement);
		if ('popover' === this.bootstrapComponentName){
			$el.popover('hide');
		} else {
			$el.tooltip('hide');
		}
		return p;
	}

	/**
	 * A promise that resolves once when the popup is opened, i.e. after all the Bootstrap animations complete.
	 * @return {Promise<void>}
	 */
	shown(): Promise<void> {
		const p: Promise<any> = new Promise((resolve: any) => {
			const sub: Subscription = this.statusSubject
				.filter(val => val === NzbPopupStatus.shown).subscribe(val => {
					sub.unsubscribe();
					resolve();
				});
		});
		return p;
	}

	/**
	 * A promise that resolves once when the popup is opened, i.e. after all the Bootstrap animations complete.
	 * @return {Promise<void>}
	 */
	hidden(): Promise<void> {
		const p: Promise<any> = new Promise((resolve: any) => {
			const sub: Subscription = this.statusSubject
				.filter(val => val === NzbPopupStatus.hidden).subscribe(val => {
					sub.unsubscribe();
					resolve();
				});
		});
		return p;
	}

	getOptions() {
		return Object.assign({}, this.options);
	}



}

import {
	Injectable,
	ComponentFactoryResolver,
	Injector,
	ApplicationRef,
	Renderer2,
	ElementRef,
	ReflectiveInjector,
	ComponentRef,
	EventEmitter
} from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';


import { NzbDynamicContent } from '../dynamic-content/nzb-dynamic-content';
import { NzbDynamicContentComponent } from '../dynamic-content/nzb-dynamic-content.component';
import { NzbModalComponent } from './nzb-modal.component';
import { NzbDynamicContentService } from '../dynamic-content/nzb-dynamic-content.service';
import { NzbModalOptions } from './nzb-modal-options';
import { NzbModalResult } from './nzb-modal-result';
import { NzbService } from '../nzb.service';
import { NzbModalStatus } from './nzb-modal-status.enum';


declare let jQuery: any;

@Injectable()
export class NzbModal {

	// events...

	/**
	 * Passes on the native Bootstrap `show.bs.modal` event
	 * @type {EventEmitter<any>}
	 */
	onShow: EventEmitter<any>;

	/**
	 * Passes on the native Bootstrap `shown.bs.modal` event
	 * @type {EventEmitter<any>}
	 */
	onShown: EventEmitter<any>;

	/**
	 * Passes on the native Bootstrap `hide.bs.modal` event
	 * @type {EventEmitter<any>}
	 */
	onHide: EventEmitter<any>;

	/**
	 * Passes on the native Bootstrap `hidden.bs.modal` event
	 * @type {EventEmitter<any>}
	 */
	onHidden: EventEmitter<any>;

	/**
	 * @private
	 * @type {Renderer2}
	 */
	private renderer: Renderer2;

	/**
	 * @private
	 * @type {NzbModalOptions}
	 */
	private defaultModalOptions: NzbModalOptions;

	/**
	 * @private
	 * @type {ComponentFactoryResolver}
	 */
	private cfr: ComponentFactoryResolver;

	/**
	 * @private
	 * @type {Injector}
	 */
	private injector: Injector;

	/**
	 * @private
	 * @type {ApplicationRef}
	 */
	private appRef: ApplicationRef;

	/**
	 * @private
	 * @type {NzbDynamicContentService}
	 */
	private contentService: NzbDynamicContentService;


	/**
	 * @private
	 * @type {ComponentRef<NzbModalComponent> | null}
	 */
	private modalComponentRef: ComponentRef<NzbModalComponent> | null;

	/**
	 * @private
	 * @type {NzbDynamicContent | null}
	 */
	private dynamicContent: NzbDynamicContent | null;

	/**
	 * @private
	 * @type {NzbModalOptions}
	 */
	private options: NzbModalOptions;

	/**
	 * @private
	 * @type {string | null}
	 */
	private ariaLabelledById: string | null = null;

	/**
	 * The status.
	 * @private
	 * @type {BehaviorSubject<NzbModalStatus>}
	 */
	private status: BehaviorSubject<NzbModalStatus>;

	/**
	 * The result.
	 * @private
	 * @type {NzbModalResult | null}
	 */
	private result: NzbModalResult | null = null;







	/**
	 * Don't use this constructor directly. Use NzbService.createModal instead.
	 * @see 	NzbService
	 * @param  {NzbService}  nzbService 		[description]
	 */
	constructor(private nzbService: NzbService) {
		this.renderer = nzbService.renderer;
		this.defaultModalOptions = nzbService.defaultModalOptions;
		this.cfr = nzbService.cfr;
		this.injector = nzbService.injector;
		this.appRef = nzbService.appRef;
		this.contentService = nzbService.contentService;
		this.onShow = new EventEmitter();
		this.onShown = new EventEmitter();
		this.onHide = new EventEmitter();
		this.onHidden = new EventEmitter();
		this.status = new BehaviorSubject(NzbModalStatus.uninitialized);
	}


	/**
	 * Shows the modal.
	 * @param {any}    content          A component type, a `TemplateRef` or a string.
	 * @param {any}    options          Optional. See `NzbModalOptions` for valid options.
	 * @param {string} ariaLabelledById Optional. This is used to set the `aria-labelledby` attribute of the top-level modal div. If your modal template has a `.modal-title` element you can safely omit this -- the library will either use the existing id of the `.modal-title` or generate and use a unique id. You should use this parameter if you don't have a `.modal-title` or wish to use a different element.
	 */
	show(content: any, options?: any, ariaLabelledById?: string): void {
		this._show(content, options, ariaLabelledById);
	}

	/**
	 * Use this method to close the modal when the user "sucessfully" completes the modal.
	 * The modal's `result.dismissed` will be false and `result.data` will be whatever you pass.
	 * @param {any} data The data you want to pass.
	 */
	close(data?: any): void {
		const result = new NzbModalResult();
		result.dismissed = false;
		result.data = data;
		this.result = result;
		this.hide();
	}

	/**
	 * Use this method to indicate the user has "cancelled out" of the modal.
	 * The modal's `result.dismissed` will be true and `result.data` will be whatever you pass as the reason.
	 * @param {any} reason [description]
	 */
	dismiss(reason?: any): void {
		const result = new NzbModalResult();
		result.dismissed = true;
		result.data = reason;
		this.result = result;
		this.hide();
	}


	/**
	 * A promise that resolves once when the modal is opened, i.e. after all the Bootstrap animations complete.
	 * @return {Promise<void>} 
	 */
	opened(): Promise<void> {
		const p: Promise<any> = new Promise((resolve: any) => {
			const sub: Subscription = this.status
				.filter(val => val === NzbModalStatus.shown).subscribe(val => {
					sub.unsubscribe();
					resolve();
				});
		});
		return p;
	}

	/**
	 * A promise that resolves once when the modal is hidden, i.e. after all the Bootstrap animations complete.
	 * @return {Promise<NzbModalResult>} The result as previously set.
	 */
	closed(): Promise<NzbModalResult> {
		const p: Promise<NzbModalResult> = new Promise((resolve: any) => {
			const sub: Subscription = this.status
				.filter(val => val === NzbModalStatus.hidden).subscribe(val => {
					sub.unsubscribe();
					resolve(this.result ? this.result : new NzbModalResult());
				});
		});
		return p;
	}

	/**
	 * Use this method to ensure the modal is hidden gracefully
	 * when the component that created it is destroyed,
	 * e.g. on a route change.
	 *
	 */
	destroy(): void {
		let status = this.status.value;
		if ( status === NzbModalStatus.shown || status === NzbModalStatus.showing || status === NzbModalStatus.initialized ){
			this.dismiss();
		} else {
			this.remove();
		}

	}


	/**
	 * If you've opened the modal with a component type as content,
	 * this will return the underlying ComponentRef.
	 * @return {ComponentRef}
	 */
	getContentComponentRef(): ComponentRef<any> | null {
		if (this.dynamicContent && this.dynamicContent.componentRef) {
			return this.dynamicContent.componentRef;
		}
		return null;
	}


	private _show(content: any, options?: any, ariaLabelledById?: string) {
		const factory = this.cfr.resolveComponentFactory(NzbModalComponent);
		this.ariaLabelledById = ariaLabelledById ? ariaLabelledById : null;
		this.result = null;
		this.options = this.initializeOptions(options);
		this.dynamicContent = this.getContent(content);
		this.modalComponentRef = factory.create(this.injector, this.dynamicContent.nodes);
		const sub: Subscription = this.modalComponentRef.instance.initialized.subscribe(() => {
			this.onModalComponentInitialized();
			sub.unsubscribe();
		});
		this.appRef.attachView(this.modalComponentRef.hostView);
		if (this.dynamicContent.viewRef) {
			this.appRef.attachView(this.dynamicContent.viewRef);
		}
		this.renderer.appendChild(document.body, this.modalComponentRef.location.nativeElement);

	}

	private onModalComponentInitialized() {
		if (! this.modalComponentRef ) {
			return;
		}
		const $el = jQuery(this.modalComponentRef.instance.modalElement.nativeElement);
		const options = Object.assign({}, this.options, {show: true});
		this.setAriaHidden(true);
		this.setAriaLabelledBy();
		this.initializeClasses();
		this.initializeEvents();
		$el.modal(options);
	}


	private hide() {
		if (this.modalComponentRef) {
			const $el = jQuery(this.modalComponentRef.instance.modalElement.nativeElement);
			$el.modal('hide');
		}
	}

	private remove() {
		this.removeEvents();
		if (this.modalComponentRef && this.dynamicContent) {
			if (this.dynamicContent.viewRef) {
				this.appRef.detachView(this.dynamicContent.viewRef);
			}
			this.appRef.detachView(this.modalComponentRef.hostView);
			this.modalComponentRef.destroy();
			this.status.next(NzbModalStatus.uninitialized);
		}
		this.modalComponentRef = null;
		this.dynamicContent = null;
	}

	private getContent(content?: any): NzbDynamicContent {
		return this.contentService.createDynamicContent(
			content,
			{modal: this},
			ReflectiveInjector.resolveAndCreate(
				[{provide: NzbModal, useValue: this}], this.injector
			),
			true
		);
	}

	private initializeOptions(raw: any): NzbModalOptions {
		const injected: any = typeof this.defaultModalOptions === 'object' ? this.defaultModalOptions : {};
		const options: NzbModalOptions = new NzbModalOptions();
		raw = typeof raw === 'object' ? raw : {};
		if (typeof raw.backdrop === 'boolean' || 'static' ===  raw.backdrop) {
			options.backdrop = raw.backdrop;
		} else {
			if (typeof injected.backdrop === 'boolean' || 'static' ===  injected.backdrop) {
				options.backdrop = injected.backdrop;
			}
		}
		if (typeof raw.keyboard === 'boolean') {
			options.keyboard = raw.keyboard;
		} else {
			if (typeof injected.keyboard === 'boolean') {
				options.keyboard = injected.keyboard;
			}
		}
		if (typeof raw.focus === 'boolean') {
			options.focus = raw.focus;
		} else {
			if (typeof injected.focus === 'boolean') {
				options.focus = injected.focus;
			}
		}

		if (typeof raw.animation === 'boolean') {
			options.animation = raw.animation;
		} else {
			if (typeof injected.animation === 'boolean') {
				options.animation = injected.animation;
			}
		}
		if (['sm', 'lg'].indexOf(raw.size) > -1) {
			options.size = raw.size;
		} else {
			if (['sm', 'lg'].indexOf(injected.size) > -1) {
				options.size = injected.size;
			}
		}


		return options;

	}

	private setAriaLabelledBy() {
		let labelId;
		if (! this.modalComponentRef) {
			return;
		}
		const el = this.modalComponentRef.instance.modalElement.nativeElement;
		const $el: any = jQuery(el);

		if (typeof this.ariaLabelledById === 'string' && this.ariaLabelledById.trim().length > 0) {
			labelId = this.ariaLabelledById.trim();
		} else {
			labelId = this.nzbService.getUniqueId('nzb-modal-label-');
		}
		let $label: any = jQuery('#' + labelId, $el);
		if ($label.length > 0) {
			this.renderer.setAttribute(el, 'aria-labelledby', labelId);
			return;
		}
		$label = jQuery('.modal-title', $el).first();
		if ($label.length > 0) {
			if ($label.attr('id') && $label.attr('id').length > 0) {
				labelId = $label.attr('id');
			} else {
				this.renderer.setAttribute($label.get(0), 'aria-labelledby', labelId);
			}
			this.renderer.setAttribute(el, 'aria-labelledby', labelId);
		}
	}

	private setAriaHidden(hidden: boolean) {
		if (! this.modalComponentRef) {
			return;
		}
		const el = this.modalComponentRef.instance.modalElement.nativeElement;
		this.renderer.setAttribute(el, 'aria-hidden', hidden ? 'true' : 'false');
	}

	private initializeClasses() {
		if (! this.modalComponentRef) {
			return;
		}
		const modalEl = this.modalComponentRef.instance.modalElement.nativeElement;
		const dialogEl = this.modalComponentRef.instance.dialogElement.nativeElement;
		this.renderer.addClass(modalEl, 'modal');
		if (this.options.animation) {
			this.renderer.addClass(modalEl, 'fade');
		}
		this.renderer.addClass(dialogEl, 'modal-dialog');
		if (this.options.size) {
			this.renderer.addClass(dialogEl, 'modal-' + this.options.size);
		}
	}

	private initializeEvents() {
		if (! this.modalComponentRef) {
			return;
		}
		const $el: any = jQuery(this.modalComponentRef.instance.modalElement.nativeElement);
		$el.on('show.bs.modal shown.bs.modal hide.bs.modal hidden.bs.modal', (event: any) => {
			switch (event.type) {
				case 'show':
					this.setAriaHidden(false);
					this.status.next(NzbModalStatus.showing);
					this.onShow.emit(event);
					break;
				case 'shown':
					this.status.next(NzbModalStatus.shown);
					this.onShown.emit(event);
					break;
				case 'hide':
					this.status.next(NzbModalStatus.hiding);
					this.onHide.emit(event);
					break;
				case 'hidden':
					this.setAriaHidden(true);
					this.status.next(NzbModalStatus.hidden);
					this.onHidden.emit(event);
					this.remove();
					break;
			}
		});
	}

	private removeEvents() {
		if (! this.modalComponentRef) {
			return;
		}
		const $el: any = jQuery(this.modalComponentRef.instance.modalElement.nativeElement);
		$el.off('show.bs.modal shown.bs.modal hide.bs.modal hidden.bs.modal');
	}


}

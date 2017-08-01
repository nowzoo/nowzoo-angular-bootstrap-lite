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
	onShow: EventEmitter<any>;
	onShown: EventEmitter<any>;
	onHide: EventEmitter<any>;
	onHidden: EventEmitter<any>;

	// status...
	private status: BehaviorSubject<NzbModalStatus>;

	// result...
	private result: NzbModalResult | null = null;


	private renderer: Renderer2;
	private defaultModalOptions: NzbModalOptions;
	private cfr: ComponentFactoryResolver;
	private injector: Injector;
	private appRef: ApplicationRef;
	private contentService: NzbDynamicContentService;


	private modalComponentRef: ComponentRef<NzbModalComponent> | null;
	private dynamicContent: NzbDynamicContent | null;
	private options: NzbModalOptions;



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


	show(content: any, options: any): void {
		this._show(content, options);
	}

	close(data?: any): void {
		const result = new NzbModalResult();
		result.dismissed = false;
		result.data = data;
		this.result = result;
		this.hide();
	}

	dismiss(reason?: any): void {
		const result = new NzbModalResult();
		result.dismissed = true;
		result.data = reason;
		this.result = result;
		this.hide();
	}

	opened(): Promise<any> {
		const p: Promise<any> = new Promise((resolve: any) => {
			const sub: Subscription = this.status
				.filter(val => val === NzbModalStatus.shown).subscribe(val => {
					sub.unsubscribe();
					resolve();
				});
		});
		return p;
	}

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

	destroy() {
		this.remove();
	}


	getContentComponentRef(): ComponentRef<any> | null {
		if (this.dynamicContent && this.dynamicContent.componentRef) {
			return this.dynamicContent.componentRef;
		}
		return null;
	}


	private _show(content: any, options: any) {
		const factory = this.cfr.resolveComponentFactory(NzbModalComponent);
		this.result = null;
		this.options = this.getOptions(options);
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

	private getOptions(raw: any): NzbModalOptions {
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

		if (typeof raw.ariaLabelledById === 'string' && raw.ariaLabelledById.trim().length > 0) {
			options.ariaLabelledById = raw.ariaLabelledById.trim();
		} else {
			options.ariaLabelledById = this.nzbService.getUniqueId('nzb-modal-label-');
		}
		return options;

	}

	private setAriaLabelledBy() {
		if (! this.modalComponentRef) {
			return;
		}
		const el = this.modalComponentRef.instance.modalElement.nativeElement;
		const $el: any = jQuery(el);
		let labelId = this.options.ariaLabelledById ? this.options.ariaLabelledById : 'nzb-modal-label';
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

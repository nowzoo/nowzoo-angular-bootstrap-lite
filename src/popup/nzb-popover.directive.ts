import {
	Directive,
	Component,
	ApplicationRef,
	ElementRef,
	Input,
	TemplateRef,
	ComponentFactoryResolver,
	ComponentRef,
	Injector,
	Renderer2
} from '@angular/core';


import {  NzbPopoverOptions } from './nzb-popover-options.class';

import { NzbPopup } from './nzb-popup.class';

@Directive({
	selector: '[nzbPopover]',
	exportAs: 'nzbPopover'
})
export class NzbPopoverDirective extends NzbPopup  {
	@Input() nzbPopover: any;



	constructor(
		element: ElementRef,
		cfr: ComponentFactoryResolver,
		injector: Injector,
		appRef: ApplicationRef,
		renderer: Renderer2,
		injectedOptions: NzbPopoverOptions
	) {
		super('popover', cfr, injector, appRef, renderer, element, injectedOptions);
	}


	
	protected getInstanceOptions(): any {
		return this.nzbPopover;
	}




}

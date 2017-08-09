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

import {  NzbTooltipOptions } from './nzb-tooltip-options.class';


import { NzbPopup } from './nzb-popup.class';

@Directive({
	selector: '[nzbTooltip]',
	exportAs: 'nzbTooltip'
})
export class NzbTooltipDirective extends NzbPopup  {
	@Input() nzbTooltip: any;

	constructor(
		element: ElementRef,
		cfr: ComponentFactoryResolver,
		injector: Injector,
		appRef: ApplicationRef,
		renderer: Renderer2,
		injectedOptions: NzbTooltipOptions
	) {
		super('tooltip', cfr, injector, appRef, renderer, element, injectedOptions);
	}

	protected getContext(): any {
		return {tooltip: this}
	}


	protected getInstanceOptions(): any {
		return this.nzbTooltip;
	}
}

import { Directive, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';

declare const jQuery: any;

@Directive({
  selector: '[data-toggle="tooltip"]'
})
export class NzbTooltipDirective implements AfterViewInit, OnDestroy {

	constructor(
		private element: ElementRef
	) { }

	ngAfterViewInit() {
		jQuery(this.element.nativeElement).tooltip();
	}

	ngOnDestroy() {
		jQuery(this.element.nativeElement).tooltip('dispose');
	}

}

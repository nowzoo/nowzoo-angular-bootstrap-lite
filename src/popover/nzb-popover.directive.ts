import {
  Directive,
  Input,
  Renderer2,
  ViewContainerRef,
  ApplicationRef,
  ComponentFactoryResolver,
  ElementRef,
  TemplateRef
} from '@angular/core';


import { NzbAbstractPopup } from '../common/nzb-abstract-popup.class';


@Directive({
  selector: '[nzbPopover]',
  exportAs: 'nzbPopover'

})
export class NzbPopoverDirective extends NzbAbstractPopup  {
  @Input() nzbPopoverTitle: TemplateRef<any> | null = null;
  @Input() nzbPopoverContent: TemplateRef<any> | null = null;
  @Input() nzbPopoverPlacement: ((tooltipEl: any, targetEl: any) => string) | null = null;


  protected bsComponentName: string = 'tooltip';

  constructor (
    elementRef: ElementRef,
    renderer: Renderer2,
    viewContainer: ViewContainerRef,
    appRef: ApplicationRef,
    cfr: ComponentFactoryResolver
  ) {
    super(elementRef, renderer, viewContainer, appRef, cfr);
  }

  protected getInputTitleTemplate(): TemplateRef<any> | null  {
    return this.nzbPopoverTitle;
  }
  protected getInputContentTemplate(): TemplateRef<any> | null  {
    return this.nzbPopoverTitle;
  }
  protected getInputPlacement(): ((tooltipEl: any, targetEl: any) => string) | null  {
    return this.nzbPopoverPlacement;
  }

}

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

declare let jQuery: any;

@Directive({
  selector: '[nzbTooltip]',
  exportAs: 'nzbTooltip'

})
export class NzbTooltipDirective extends NzbAbstractPopup  {
  @Input() nzbTooltipTitle: TemplateRef<any> | null = null;
  @Input() nzbTooltipPlacement: ((tooltipEl: any, targetEl: any) => string) | null = null;

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
    return this.nzbTooltipTitle;
  }
  protected getInputContentTemplate(): TemplateRef<any> | null  {
    return null;
  }

  protected getInputPlacement(): ((tooltipEl: any, targetEl: any) => string) | null  {
    return this.nzbTooltipPlacement;
  }

}

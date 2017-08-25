import {
  Directive,
  Input,
  Renderer2,
  ViewContainerRef,
  ApplicationRef,
  ComponentFactoryResolver,
  ElementRef,
  TemplateRef,
  NgZone
} from '@angular/core';

import { NzbTooltipOptions } from './nzb-tooltip-options.class';

import { NzbAbstractPopup } from '../common/nzb-abstract-popup.class';

declare let jQuery: any;

@Directive({
  selector: '[nzbTooltip]',
  exportAs: 'nzbTooltip'

})
export class NzbTooltipDirective extends NzbAbstractPopup  {
  @Input() nzbTooltipTitle: TemplateRef<any> | null = null;
  @Input() nzbTooltipOptions: NzbTooltipOptions | null = null;

  protected bsComponentName: string = 'tooltip';

  constructor (
    elementRef: ElementRef,
    renderer: Renderer2,
    viewContainer: ViewContainerRef,
    appRef: ApplicationRef,
    cfr: ComponentFactoryResolver,
    ngZone: NgZone,
    defaultOptions: NzbTooltipOptions
  ) {
    super(elementRef, renderer, viewContainer, appRef, cfr, ngZone, defaultOptions);
  }

  protected getInputTitleTemplate(): TemplateRef<any> | null  {
    return this.nzbTooltipTitle;
  }
  protected getInputContentTemplate(): TemplateRef<any> | null  {
    return null;
  }
  protected getInputOptions():  NzbTooltipOptions | null{
    return this.nzbTooltipOptions;
  }


}

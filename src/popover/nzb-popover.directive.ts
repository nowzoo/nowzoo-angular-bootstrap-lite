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


import { NzbAbstractPopup } from '../common/nzb-abstract-popup.class';
import { NzbPopoverOptions } from './nzb-popover-options.class';


@Directive({
  selector: '[nzbPopover]',
  exportAs: 'nzbPopover'

})
export class NzbPopoverDirective extends NzbAbstractPopup  {
  @Input() nzbPopoverTitle: TemplateRef<any> | null = null;
  @Input() nzbPopoverContent: TemplateRef<any> | null = null;
  @Input() nzbPopoverOptions: NzbPopoverOptions | null = null;

  protected bsComponentName: string = 'popover';

  constructor (
    elementRef: ElementRef,
    renderer: Renderer2,
    viewContainer: ViewContainerRef,
    appRef: ApplicationRef,
    cfr: ComponentFactoryResolver,
    ngZone: NgZone,
    defaultOptions: NzbPopoverOptions
  ) {
    super(elementRef, renderer, viewContainer, appRef, cfr, ngZone, defaultOptions);
  }

  protected getInputTitleTemplate(): TemplateRef<any> | null  {
    return this.nzbPopoverTitle;
  }
  protected getInputContentTemplate(): TemplateRef<any> | null  {
    return this.nzbPopoverContent;
  }

  protected getInputOptions():  NzbPopoverOptions | null{
    return this.nzbPopoverOptions;
  }

}

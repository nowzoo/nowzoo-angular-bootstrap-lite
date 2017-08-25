import { Directive, Input, ElementRef } from '@angular/core';
import { NzbAbstractTab } from './nzb-abstract-tab.class';

@Directive({
  selector: '[nzbTab]'
})
export class NzbTabDirective extends NzbAbstractTab{
  @Input('nzbTab') nzbTab: string

  get id(): string {
    return this.nzbTab;
  }
  constructor(
    elementRef: ElementRef
  ) {
    super(elementRef);
  }

}

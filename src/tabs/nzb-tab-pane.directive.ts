import { Directive, Input, ElementRef} from '@angular/core';
import { NzbAbstractTab } from './nzb-abstract-tab.class';
@Directive({
  selector: '[nzbTabPane]',
  exportAs: 'nzbTabPane'
})
export class NzbTabPaneDirective extends NzbAbstractTab {
  @Input('nzbTabPane') nzbTabPane: string;

  get id(): string {
    return this.nzbTabPane;
  }
  constructor(
    elementRef: ElementRef
  ) {
    super(elementRef);
  }

}

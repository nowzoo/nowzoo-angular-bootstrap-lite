import { ElementRef } from '@angular/core';
import { NzbTabData } from './nzb-tab-data.class';

export abstract class NzbAbstractTab {

  private tabData: NzbTabData;

  get data():NzbTabData {
    return this.tabData;
  }
  set data(tabData: NzbTabData) {
    this.tabData = tabData;
  }
  get el(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  abstract get id(): string;


  constructor(
    private elementRef: ElementRef
  ) { }

}

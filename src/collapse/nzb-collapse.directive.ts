import {
  Directive,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  NgZone
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


declare const jQuery: any;

import { NzbAbstractBootstrap } from '../common/nzb-abstract-bootstrap.class';


@Directive({
  selector: '[nzbCollapse]',
  exportAs: 'nzbCollapse'
})
export class NzbCollapseDirective extends NzbAbstractBootstrap  implements AfterViewInit, OnDestroy {

  protected bsComponentName: string = 'collapse';
  constructor(
    elementRef: ElementRef,
    ngZone: NgZone
  ) {
    super(elementRef, ngZone);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const $el = jQuery(this.elementRef.nativeElement);
      this.initBootsrapListeners($el);
      this.ngZone.runOutsideAngular(() => {
        $el.addClass('collapse');
        $el.collapse({toggle: $el.data('toggle')});
      })
    })

  }

  ngOnDestroy() {
    setTimeout(() => {
      this.destroyBootsrapListeners(jQuery(this.elementRef.nativeElement));
    })

  }

}

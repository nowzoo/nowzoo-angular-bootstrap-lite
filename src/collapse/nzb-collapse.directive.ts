import {
  Directive,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  NgZone
} from '@angular/core';

declare const jQuery: any;

import { NzbAbstractBootstrap } from '../common/nzb-abstract-bootstrap.class';


@Directive({
  selector: '[nzbCollapse]',
  exportAs: 'nzbCollapse'
})
export class NzbCollapseDirective extends NzbAbstractBootstrap  implements AfterViewInit, OnDestroy {

  protected bsComponentName: string = 'collapse';
  constructor(
    private elementRef: ElementRef,
    ngZone: NgZone
  ) {
    super(ngZone);
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

  protected runBsFunc(f: string) {
    return super.runBsFunc(jQuery(this.elementRef.nativeElement), f);
  }

  toggle() {
    this.runBsFunc('toggle')
  }

  show() {
    this.runBsFunc('show')
  }

  hide() {
    this.runBsFunc('hide')
  }

}

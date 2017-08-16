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

@Directive({
  selector: '[nzbCollapse]',
  exportAs: 'nzbCollapse'
})
export class NzbCollapseDirective implements AfterViewInit, OnDestroy {

  private statusSubject: BehaviorSubject<string> = new BehaviorSubject('hidden');

  constructor(
    private ngZone: NgZone,
    private element: ElementRef
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {
      const $el = jQuery(this.element.nativeElement);
      $el.on('show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse', (event:Event) => {
        this.ngZone.run(() => {
          this.statusSubject.next(event.type);
        });
      })
      $el.addClass('collapse');
      $el.collapse({toggle: $el.data('toggle')});
    })
  }

  ngOnDestroy() {
    jQuery(this.element.nativeElement).off('show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse');
  }

  toggle(): void {
    jQuery(this.element.nativeElement).collapse('toggle');
  }
  show(): void {
    jQuery(this.element.nativeElement).collapse('show');
  }
  hide(): void {
    jQuery(this.element.nativeElement).collapse('hide');
  }

  get status(): Observable<string> {
    return this.statusSubject.asObservable();
  }
  get shown(): boolean {
    return this.statusSubject.value === 'shown';
  }
  get hidden(): boolean {
    return this.statusSubject.value === 'hidden';
  }

}

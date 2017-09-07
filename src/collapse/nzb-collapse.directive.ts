import {
  Directive,
  NgZone,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

declare const jQuery: any;

@Directive({
  selector: '[nzbCollapse]',
  exportAs: 'nzbCollapse'
})
export class NzbCollapseDirective implements AfterViewInit, OnDestroy {

  private eventsSubject: Subject<Event> = new Subject();
  private statusSubject: BehaviorSubject<string> = new BehaviorSubject('uninitialized');

  get events(): Observable<Event> {
    return this.eventsSubject.asObservable();
  }

  get status(): Observable<string> {
    return this.statusSubject.asObservable();
  }

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {
      const $el = jQuery(this.elementRef.nativeElement);
      const shown = $el.data('toggle') === true;

      this.ngZone.runOutsideAngular(() => {
        $el.on('show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse', (event: Event) => {
          this.ngZone.run(() => {
            this.eventsSubject.next(event);
            this.statusSubject.next(event.type);
          })
        })
        $el.collapse();
        this.statusSubject.next(shown ? 'shown' : 'hidden');
      })
    })
  }

  ngOnDestroy() {
    setTimeout(() => {
      const $el = jQuery(this.elementRef.nativeElement);
      $el.off('show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse');
    });
  }

  toggle() {
    jQuery(this.elementRef.nativeElement).collapse('toggle')
  }

  show() {
    jQuery(this.elementRef.nativeElement).collapse('show')
  }

  hide() {
   jQuery(this.elementRef.nativeElement).collapse('hide')
  }
}

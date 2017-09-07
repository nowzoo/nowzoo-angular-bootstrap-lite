import {
  Directive,
  Renderer2,
  ElementRef,
  NgZone,
  AfterViewInit,
  Input
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


declare let jQuery: any;

@Directive({
  selector: '[nzbDropdown]',
  exportAs: 'nzbDropdown'
})
export class NzbDropdownDirective implements AfterViewInit {

  protected eventsSubject: Subject<Event> = new Subject();
  protected statusSubject: BehaviorSubject<string> = new BehaviorSubject('uninitialized');

  get status(): Observable<string> {
    return this.statusSubject.asObservable();
  }

  get events(): Observable<Event> {
    return this.eventsSubject.asObservable();
  }

  constructor(
    private ngZone: NgZone,
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.ngZone.runOutsideAngular(() => {
        jQuery(this.elementRef.nativeElement).on('show.bs.dropdown shown.bs.dropdown hide.bs.dropdown hidden.bs.dropdown', (event: Event) => {
          this.ngZone.run(() => {
            this.eventsSubject.next(event);
            this.statusSubject.next(event.type);
          });
        })
      });
      this.statusSubject.next('hidden');
    })
  }

  toggle() {
    jQuery(this.elementRef.nativeElement).dropdown('toggle');
  }

  update() {
    jQuery(this.elementRef.nativeElement).dropdown('update');
  }

}

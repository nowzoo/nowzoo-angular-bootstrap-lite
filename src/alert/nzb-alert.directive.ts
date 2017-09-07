import {
  Directive,
  Renderer2,
  ElementRef,
  TemplateRef,
  NgZone,
  AfterViewInit
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


declare let jQuery: any;

@Directive({
  selector: '[nzbAlert]',
  exportAs: 'nzbAlert'

})
export class NzbAlertDirective implements AfterViewInit {

  private bsComponentName: string = 'alert';
  private eventsSubject: Subject<Event> = new Subject();
  private statusSubject: BehaviorSubject<string> = new BehaviorSubject('uninitialized');

  get events(): Observable<Event> {
    return this.eventsSubject.asObservable();
  }

  get status(): Observable<string> {
    return this.statusSubject.asObservable();
  }

  constructor (
    private elementRef: ElementRef,
    private templateRef: TemplateRef<any>,
    private renderer: Renderer2,
    private ngZone: NgZone,
  ) {  }

  ngAfterViewInit() {
    setTimeout(() => {
      const $el = jQuery(this.elementRef.nativeElement);
      $el.on('close.bs.alert closed.bs.alert', (event: Event) => {
        this.eventsSubject.next(event);
        this.statusSubject.next(event.type);
      })
      $el.alert();
      this.statusSubject.next('shown');
    });

  }

  hide(): void {
    const $el = jQuery(this.elementRef.nativeElement);
    $el.alert('hide');
  }


}

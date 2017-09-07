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
  selector: '[nzbAlert]',
  exportAs: 'nzbAlert'
})
export class NzbAlertDirective implements AfterViewInit {
  @Input() initiallyOpen: boolean = true;
  private eventsSubject: Subject<Event> = new Subject();
  private statusSubject: BehaviorSubject<string> = new BehaviorSubject('uninitialized');
  private $placeholder: any;
  private $el: any;

  get events(): Observable<Event> {
    return this.eventsSubject.asObservable();
  }

  get status(): Observable<string> {
    return this.statusSubject.asObservable();
  }

  constructor (
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {  }

  ngAfterViewInit() {
    setTimeout(() => {
      const comment = this.renderer.createComment('alert placeholder');
      this.$el = jQuery(this.elementRef.nativeElement);
      this.$placeholder = jQuery(comment);
      this.$el.before(this.$placeholder);
      if (this.initiallyOpen) {
        this.open();
      } else {
        this.close();
      }
    });

  }
  open() {
    this.ngZone.runOutsideAngular(() => {
      this.$placeholder.after(this.$el);
      this.statusSubject.next('opening');
      this.$el.one('close.bs.alert', (event: Event) => {
        this.ngZone.run(() =>{
          this.eventsSubject.next(event);
          this.statusSubject.next('closing');
        });
      });
      this.$el.one('closed.bs.alert', (event: Event) => {
        this.ngZone.run(() =>{
          this.statusSubject.next('closed');
        });
      });


      this.$el.alert();

      this.ngZone.run(() => {
        if (! this.$el.hasClass('fade')){
          this.statusSubject.next('open');
          return;
        }
        this.$el.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', (event: Event) => {
          this.ngZone.run(() =>{
            this.statusSubject.next('open');
          });
        });
        setTimeout(() => {
          this.$el.addClass('show')
        }, 100)

      });
    });
  }
  close() {
    if ('uninitialized' === this.statusSubject.value){
      this.$el.remove();
      this.statusSubject.next('closed');
      return;
    }
    if ('open' !== this.statusSubject.value){
      return;
    }
    jQuery(this.elementRef.nativeElement).alert('close');
  }
}

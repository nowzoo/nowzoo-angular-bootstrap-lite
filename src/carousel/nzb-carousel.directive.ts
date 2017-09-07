import {
  Directive,
  ElementRef,
  NgZone,
  AfterViewInit
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


declare let jQuery: any;

@Directive({
  selector: '[nzbCarousel]',
  exportAs: 'nzbCarousel'
})
export class NzbCarouselDirective implements AfterViewInit {

  private $el: any;
  private animatingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private pausedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private indexSubject: BehaviorSubject<number> = new BehaviorSubject(-1);
  private eventsSubject: Subject<Event> = new Subject();
  private dataSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  get animating() : Observable<boolean> {
    return this.animatingSubject.asObservable();
  }
  get paused() : Observable<boolean> {
    return this.pausedSubject.asObservable();
  }
  get index() : Observable<number> {
    return this.indexSubject.asObservable();
  }
  get events() : Observable<Event> {
    return this.eventsSubject.asObservable();
  }
  get data(): Observable<any> {
    return this.dataSubject.asObservable();
  };

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone
  ) { }

  private updateDataProperties() {
    const data = this.$el.data('bs.carousel');
    this.pausedSubject.next(data._isPaused);
    this.dataSubject.next(data);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.$el = jQuery(this.elementRef.nativeElement);
      let active = jQuery('.carousel-inner .carousel-item', this.$el).index('.active');
      this.indexSubject.next(active);
      this.ngZone.runOutsideAngular(() => {

        this.$el.on('slide.bs.carousel slid.bs.carousel mouseenter mouseleave touchend', (event: any) => {
          this.ngZone.run(() => {
            if ('bs.carousel' === event.namespace){
              this.eventsSubject.next(event);
              if ('slid' === event.type){
                this.indexSubject.next(event.to);
                this.animatingSubject.next(false);
              } else {
                this.animatingSubject.next(true);
              }
            }
            this.updateDataProperties();
          })
        })
        this.$el.carousel();
        this.updateDataProperties();
      })
    });
  }

  cycle(){
    this.$el.carousel('cycle');
    this.updateDataProperties();
  }
  pause(){
    this.$el.carousel('pause');
    this.updateDataProperties();
  }
  slideTo(index: number){
    this.$el.carousel(index);
    this.updateDataProperties();
  }
  prev() {
    this.$el.carousel('prev');
    this.updateDataProperties();
  }
  next() {
    this.$el.carousel('next');
    this.updateDataProperties();
  }

}

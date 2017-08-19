import {
  EventEmitter,
  ElementRef,
  NgZone
} from '@angular/core';


import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
declare let jQuery: any;


export abstract class NzbAbstractBootstrap  {

  protected abstract bsComponentName: string;
  protected eventsSubject: Subject<Event> = new Subject();
  protected statusSubject: BehaviorSubject<string> = new BehaviorSubject('uninitialized');


  constructor (
    protected elementRef: ElementRef,
    protected ngZone: NgZone
  ) {}



  protected getEventTypes(): string[] {
    return ['show', 'hide', 'shown', 'hidden'];
  }
  protected getEventName(type: string): string {
    return type + '.bs.' + this.bsComponentName;
  }

  protected getEventNames(): string[] {
    const types = this.getEventTypes();
    return types.map((type: string) => {
      return this.getEventName(type);
    })
  }

  protected initBootsrapListeners($el: any): void {
    this.ngZone.runOutsideAngular(() => {
      $el.on(this.getEventNames().join(' '), (event:Event) => {
        this.ngZone.run(() => {
          this.eventsSubject.next(event);
          this.statusSubject.next(event.type);
        });
      })
    })
  }

  protected destroyBootsrapListeners($el: any): void {
    this.ngZone.runOutsideAngular(() => {
      $el.off(this.getEventNames().join(' '));
      this.ngZone.run(() => {});
    })
  }

  protected runBsFunc(func: string): void {
    this.ngZone.runOutsideAngular(() => {
      jQuery(this.elementRef.nativeElement)[this.bsComponentName](func);
      this.ngZone.run(() => {});
    })
  }


  toggle(): void {
    this.runBsFunc('toggle');
  }
  show(): void {
    this.runBsFunc('show');
  }
  hide(): void {
    this.runBsFunc('hide');
  }


  get status(): Observable<string> {
    return this.statusSubject.asObservable();
  }

  get events(): Observable<Event> {
    return this.eventsSubject.asObservable();
  }

  get shown(): boolean {
    return this.statusSubject.value === 'shown';
  }
  get hidden(): boolean {
    return this.statusSubject.value === 'hidden';
  }

  get untilShown(): Promise<void> {
    const p = new Promise<void>((resolve:any) => {
      this.status.filter((val: string) => 'shown' === val).take(1).subscribe(resolve);
    })
    return p;
  }
  get untilHidden(): Promise<void> {
    const p = new Promise<void>((resolve:any) => {
      this.status.filter((val: string) => 'hidden' === val).take(1).subscribe(resolve);
    })
    return p;
  }


  get boostrapComponentData(): any {
    return jQuery(this.elementRef.nativeElement).data('bs.' + this.bsComponentName);
  }

}

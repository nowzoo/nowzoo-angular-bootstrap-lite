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
          this.statusSubject.next(event.type);
          this.eventsSubject.next(event);
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

  protected runBsFunc(el: any, func: string): void {
    this.ngZone.runOutsideAngular(() => {
      jQuery(el)[this.bsComponentName](func);
      this.ngZone.run(() => {});
    })
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
}

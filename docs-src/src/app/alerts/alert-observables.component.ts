import { Component, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NzbAlertDirective } from 'nowzoo-angular-bootstrap-lite';


@Component({
  selector: 'app-alert-observables',
  templateUrl: './alert-observables.component.html',
  styleUrls: ['./alert-observables.component.scss']
})
export class AlertObservablesComponent implements AfterViewInit, OnDestroy {
  @Input() alert: NzbAlertDirective;
  constructor() { }

  private eventsSub: Subscription;
  private events: Event[] = [];
  last5: Event[] = [];
  ngAfterViewInit() {
    this.eventsSub = this.alert.events.subscribe((event: Event) => {
      this.events.push(event);
      this.last5 = this.events.slice(Math.max(this.events.length - 5, 0));
    });
  }

  ngOnDestroy() {
    this.eventsSub.unsubscribe();
  }

}

import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NzbTooltipDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-tooltip-observables',
  templateUrl: './tooltip-observables.component.html',
  styleUrls: ['./tooltip-observables.component.scss']
})
export class TooltipObservablesComponent implements AfterViewInit, OnDestroy {
  @Input() tooltip: NzbTooltipDirective;
  private eventsSub: Subscription;
  private events: Event[] = [];
  last5: Event[] = [];
  ngAfterViewInit() {
    this.eventsSub = this.tooltip.events.subscribe((event: Event) => {
      this.events.push(event);
      this.last5 = this.events.slice(Math.max(this.events.length - 5, 0));
    });
  }
  ngOnDestroy() {
    this.eventsSub.unsubscribe();
  }

}

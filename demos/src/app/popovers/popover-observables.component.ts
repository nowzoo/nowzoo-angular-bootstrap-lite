import { Component, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-popover-observables',
  templateUrl: './popover-observables.component.html',
  styleUrls: ['./popover-observables.component.scss']
})
export class PopoverObservablesComponent implements AfterViewInit, OnDestroy {
  @Input() popover: NzbPopoverDirective;
  private eventsSub: Subscription;
  private events: Event[] = [];
  last5: Event[] = [];
  ngAfterViewInit() {
    this.eventsSub = this.popover.events.subscribe((event: Event) => {
      this.events.push(event);
      this.last5 = this.events.slice(Math.max(this.events.length - 5, 0));
    });
  }

  ngOnDestroy() {
    this.eventsSub.unsubscribe();
  }

}

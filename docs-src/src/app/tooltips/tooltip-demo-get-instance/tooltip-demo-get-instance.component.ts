import { Component, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbTooltipDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-tooltip-demo-get-instance',
  template: `
    <p>
      <button class="btn btn-primary"
        nzbTooltip
        #tooltipInstance="nzbTooltip"
        title="Tooltip Instance Demo"
        data-placement="auto">
        Tooltip Demo (Hover)
      </button>
    </p>
    <p>
      <strong>Status:</strong> {{tooltipInstance.status | async | json}}
    </p>

    <p><strong>Last 5 Events (Newest First):</strong></p>
    <ol>
      <li *ngFor="let e of last5Events">{{e.type}}.{{e.namespace}} at {{e.timeStamp | amDateFormat: 'H:mm:ss.SSSS'}}</li>
    </ol>
  `
})
export class TooltipDemoGetInstanceComponent implements AfterViewInit, OnDestroy {
  @ViewChild('tooltipInstance') tooltipInstance: NzbTooltipDirective;
  private sub: Subscription;
  last5Events: Event[] = []

  ngAfterViewInit() {
    this.sub = this.tooltipInstance.events.subscribe((boostrapEvent: Event) => {
      this.last5Events.unshift(boostrapEvent);
      this.last5Events = this.last5Events.slice(0, 5)
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

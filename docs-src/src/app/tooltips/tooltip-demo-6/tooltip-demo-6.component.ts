import { Component, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbTooltipDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-tooltip-demo-6',
  template: `
    <p>
      <button class="btn btn-primary"
        nzbTooltip
        #tooltipInstance="nzbTooltip"
        title="This is the tooltip title.">Tooltip</button>
    </p>

    <p>
      <strong>Last 10 Events</strong> (most recent first)
    </p>
    <ol>
      <li *ngFor="let e of events">{{e.type}}.{{e.namespace}} at {{e.timeStamp | amDateFormat: 'H:mm:ss.SSSS'}}</li>
    </ol>
    <p>
      <strong>Last 10 Statuses</strong> (most recent first)
    </p>
    <ol>
      <li *ngFor="let s of statii">{{s}}</li>
    </ol>

  `,
  styles: []
})
export class TooltipDemo6Component implements AfterViewInit, OnDestroy  {
  @ViewChild('tooltipInstance') tooltipInstance: NzbTooltipDirective;

  private eventSub: Subscription;
  private statusSub: Subscription;

  events: any[] = [];
  statii: string[] = [];

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.eventSub = this.tooltipInstance.events.subscribe((event:any) => {
        this.events.unshift(event);
        this.events = this.events.slice(0, 10);
      });
      this.statusSub = this.tooltipInstance.status.subscribe((status: string) => {
        this.statii.unshift(status);
        this.statii = this.statii.slice(0, 10);
      });
    })

  }

  ngOnDestroy() {
    this.eventSub.unsubscribe();
    this.statusSub.unsubscribe();
  }
}

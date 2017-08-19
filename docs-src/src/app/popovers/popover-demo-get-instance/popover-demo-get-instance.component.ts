import { Component, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-popover-demo-get-instance',
  template: `
    <p>
      <button class="btn btn-primary"
        nzbPopover
        #popoverInstance="nzbPopover"
        title="Popover Instance Demo"
        data-placement="auto"
        data-content="Hi there.">
        Popover
      </button>
    </p>
    <p>
      <strong>Status:</strong> {{popoverInstance.status | async | json}}
    </p>

    <p><strong>Last 5 Events (Newest First):</strong></p>
    <ol>
      <li *ngFor="let e of last5Events">{{e.type}}.{{e.namespace}} at {{e.timeStamp | amDateFormat: 'H:mm:ss.SSSS'}}</li>
    </ol>
  `
})
export class PopoverDemoGetInstanceComponent implements AfterViewInit, OnDestroy {
  @ViewChild('popoverInstance') popoverInstance: NzbPopoverDirective;
  private sub: Subscription;
  last5Events: Event[] = []

  ngAfterViewInit() {
    this.sub = this.popoverInstance.events.subscribe((boostrapEvent: Event) => {
      this.last5Events.unshift(boostrapEvent);
      this.last5Events = this.last5Events.slice(0, 5)
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

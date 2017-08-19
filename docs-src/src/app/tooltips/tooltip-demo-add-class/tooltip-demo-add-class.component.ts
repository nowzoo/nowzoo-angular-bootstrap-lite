import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
declare const jQuery: any;

import { NzbTooltipDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-tooltip-demo-add-class',
  template: `
  <p>
    <button class="btn btn-primary"
      nzbTooltip
      #tooltipInstance="nzbTooltip"
      [nzbTooltipTitle]="tooltipContent"
      data-placement="auto">
      Tooltip Demo (Hover)
    </button>
    <ng-template #tooltipContent>
      This tooltip
      <strong *ngIf="!dangerClassOn">does not have</strong>
      <strong *ngIf="dangerClassOn">has</strong>
      the extra .danger class.
    </ng-template>

  </p>
  <p>
    <button class="btn btn-secondary btn-sm" (click)="toggle()">
      Toggle Class
    </button>
    <strong>On:</strong> {{dangerClassOn | json}}
  </p>
  `
})
export class TooltipDemoAddClassComponent implements AfterViewInit, OnDestroy {
  @ViewChild('tooltipInstance') tooltipInstance: NzbTooltipDirective;

  dangerClassOn: boolean = true;

  private sub: Subscription;

  toggle() {
    // check to see that tip exists (it does not if the popover has not yet been opened)...
    let tip = this.tooltipInstance.boostrapComponentData.tip || null;
    this.dangerClassOn  = ! this.dangerClassOn;
    if (tip) {
      jQuery(tip).toggleClass('danger', this.dangerClassOn);
    }

  }
  ngAfterViewInit() {
    // make sure we toggle the class at least once...
    this.sub = this.tooltipInstance.events
      .filter((event:Event) => 'inserted' === event.type)
      .subscribe(() => {
        jQuery(this.tooltipInstance.boostrapComponentData.tip)
          .toggleClass('danger', this.dangerClassOn);
      })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

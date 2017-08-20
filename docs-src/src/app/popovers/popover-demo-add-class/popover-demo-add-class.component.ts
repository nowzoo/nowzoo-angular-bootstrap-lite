import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
declare const jQuery: any;

import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-popover-demo-add-class',
  template: `
  <p>
    <button class="btn btn-primary"
      nzbPopover
      #popoverInstance="nzbPopover"
      title="Popover"
      [nzbPopoverContent]="popoverContent"
      data-placement="auto">
      Popover Demo (Click)
    </button>
    <ng-template #popoverContent>
      This popover
      <strong *ngIf="!dangerClassOn">does not have</strong>
      <strong *ngIf="dangerClassOn">has</strong>
      the extra <code>.danger</code> class.
    </ng-template>

  </p>
  <p>
    <button class="btn btn-secondary btn-sm" (click)="toggle()">
      Toggle Class
    </button>
    <strong>On:</strong> {{dangerClassOn | json}}
  </p>
  `,
  styles: []
})
export class PopoverDemoAddClassComponent implements AfterViewInit, OnDestroy {
  @ViewChild('popoverInstance') popoverInstance: NzbPopoverDirective;

  dangerClassOn: boolean = true;

  private sub: Subscription;

  toggle() {
    // check to see that tip exists (it does not if the popover has not yet been opened)...
    let tip = this.popoverInstance.boostrapComponentData.tip || null;
    this.dangerClassOn  = ! this.dangerClassOn;
    if (tip) {
      jQuery(tip).toggleClass('danger', this.dangerClassOn);
    }

  }
  ngAfterViewInit() {
    // make sure we toggle the class at least once...
    this.sub = this.popoverInstance.events
      .filter((event:Event) => 'inserted' === event.type)
      .subscribe(() => {
        jQuery(this.popoverInstance.boostrapComponentData.tip)
          .toggleClass('danger', this.dangerClassOn);
      })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

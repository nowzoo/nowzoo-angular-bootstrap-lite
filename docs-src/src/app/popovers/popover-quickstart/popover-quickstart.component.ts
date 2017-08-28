import { Component } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-popover-quickstart',
  templateUrl: './popover-quickstart.component.html',
  styleUrls: ['./popover-quickstart.component.scss']
})
export class PopoverQuickstartComponent  {

  simpleHTML = `
<p>
  <button class="btn btn-outline-info"
    nzbPopover
    title="Static Popover Title"
    data-content="Some static popover content">
    Simple Popover
  </button>
</p>
  `

  fancySnip = `
<button class="btn btn-outline-info"
  nzbPopover
  #popoverInstance="nzbPopover"
  [nzbPopoverTitle]="titleTemplate"
  [nzbPopoverContent]="contentTemplate"
  [nzbPopoverOptions]="{animation: false}"
  data-trigger="hover">Fancy Popover (Hover)</button>
  `
  fancyHTML = `
<p>
<button class="btn btn-outline-info"
  nzbPopover
  #popoverInstance="nzbPopover"
  [nzbPopoverTitle]="titleTemplate"
  [nzbPopoverContent]="contentTemplate"
  [nzbPopoverOptions]="{animation: false}"
  data-trigger="hover">Fancy Popover (Hover)</button>
</p>
<!-- Template for the title -->
<ng-template #titleTemplate>
  Shown {{shownAt | amTimeAgo}}!
</ng-template>
<!-- Template for the content -->
<ng-template #contentTemplate>
  <div class="text-center">
    <p>
      This popover has been shown for
    </p>
    <h4>{{shownFor | number}}</h4>
    <p>
      second<span *ngIf="1!==shownFor">s</span>!
    </p>
  </div>
</ng-template>


  `
  fancyTs = `
import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as moment from 'moment';

import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-popover-quickstart-demo',
  templateUrl: './popover-quickstart-demo.component.html'
})
export class PopoverQuickstartDemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('popoverInstance') popoverInstance: NzbPopoverDirective;
  shownAt: any;
  shownFor: number;
  private interval: any;
  private sub: Subscription;
  ngAfterViewInit() {
    this.sub = this.popoverInstance.events.subscribe((event: Event) => {

      switch(event.type) {
        case 'shown':
          this.popoverInstance.update();
          this.shownFor = 0;
          this.shownAt = moment();
          this.interval = setInterval(() => {
            this.shownFor = Math.floor((moment().valueOf() - this.shownAt.valueOf())/1000);
            this.popoverInstance.update();
          }, 1000)
          break;
        case 'hide':
          clearInterval(this.interval);
          break;
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    clearInterval(this.interval);
  }

}

  `
}

import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-popover-content',
  templateUrl: './popover-content.component.html',
  styleUrls: ['./popover-content.component.scss']
})
export class PopoverContentComponent implements OnInit {

  baseId: string;
  gistId = 'cdcarson/0d2e5ca7d1c32172fe09fcd78bd5b644';
  constructor() { }

  ngOnInit() {
    this.baseId = _.uniqueId('app-popover-content')
  }

  snip = `
<ng-template #contentTemplate>
  ...
</ng-template>
<button class="btn btn-outline-info"
  nzbPopover
  #popoverInstance="nzbPopover"
  [nzbPopoverContent]="contentTemplate"
  title="Static Title">Popover Target</button>

  `

  html = `
<ng-template #contentTemplate>
  <p>Shown {{shownFor}} seconds.</p>
  <p>
    <button role="button" class="btn btn-danger"
      (click)="popoverInstance.hide()" aria-label="Close">
      <i aria-hidden="true" class="fa fa-times"></i> Close Popover
    </button>
  </p>
</ng-template>
<p>
  <button class="btn btn-outline-info"
    nzbPopover
    #popoverInstance="nzbPopover"
    [nzbPopoverContent]="contentTemplate"
    title="Static Title">Popover Target</button>
</p>


  `

  ts = `
import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-popover-content-demo',
  templateUrl: './popover-content-demo.component.html'
})
export class PopoverContentDemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('popoverInstance') popoverInstance: NzbPopoverDirective;
  shownFor: number;
  private interval: any;
  private sub: Subscription;

  constructor() { }

  ngAfterViewInit() {
    this.sub = this.popoverInstance.events.subscribe((event: Event) => {

      switch(event.type) {
        case 'shown':
          this.popoverInstance.update();
          this.shownFor = 0;
          this.interval = setInterval(() => {
            this.shownFor++;
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

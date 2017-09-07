import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-title',
  templateUrl: './popover-title.component.html',
  styleUrls: ['./popover-title.component.scss']
})
export class PopoverTitleComponent {
  tsCode = `
import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-popover-title-demo',
  templateUrl: './popover-title-demo.component.html',
})
export class PopoverTitleDemoComponent implements AfterViewInit, OnDestroy {
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

  snip = `
<ng-template #titleTemplate>
  ...
</ng-template>
<button class="btn btn-outline-info"
  nzbPopover
  #popoverInstance="nzbPopover"
  [nzbPopoverTitle]="titleTemplate"
  data-content="Some static content.">Popover Target</button>
  `
  htmlCode = `
<ng-template #titleTemplate>
  <div class="clearfix">
    <div class="pull-left">
      Shown {{shownFor}}s
    </div>
    <div class="pull-right">
      <a role="button" class="text-secondary" style="cursor:pointer"
        (click)="popoverInstance.hide()" aria-label="Close">
        <i aria-hidden="true" class="fa fa-times"></i>
      </a>
    </div>
  </div>
</ng-template>
<p>
  <button class="btn btn-outline-info"
    nzbPopover
    #popoverInstance="nzbPopover"
    [nzbPopoverTitle]="titleTemplate"
    data-content="Some static content.">Popover Target</button>
</p>
`

}

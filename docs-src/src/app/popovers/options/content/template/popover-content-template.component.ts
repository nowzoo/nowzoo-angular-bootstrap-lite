import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-content-template',
  templateUrl: './popover-content-template.component.html',
  styleUrls: ['./popover-content-template.component.scss']
})
export class PopoverContentTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ts = `
import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-popover-content-template-demo',
  templateUrl: './popover-content-template-demo.component.html',
  styleUrls: ['./popover-content-template-demo.component.scss']
})
export class PopoverContentTemplateDemoComponent implements AfterViewInit, OnDestroy {
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

  html = `


<ng-template #contentTemplate>
  <p>
    This nifty popover has been shown
    for {{shownFor}} seconds.
  </p>
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
    title="Static Title">
    Content from Template
  </button>
</p>
  `

  snip = `
<ng-template #contentTemplate>...</ng-template>
<button class="btn btn-outline-info"
  nzbPopover
  #popoverInstance="nzbPopover"
  [nzbPopoverContent]="contentTemplate"
  title="Static Title">
  Content from Template
</button>

  `

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-title-template',
  templateUrl: './popover-title-template.component.html',
  styleUrls: ['./popover-title-template.component.scss']
})
export class PopoverTitleTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ts = `
import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-popover-title-template-demo',
  templateUrl: './popover-title-template-demo.component.html',
  styleUrls: ['./popover-title-template-demo.component.scss']
})
export class PopoverTitleTemplateDemoComponent implements AfterViewInit, OnDestroy {
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

  `;

  html = `
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
    data-content="Some static content.">
    Title from Template
  </button>
</p>
  `
  snip = `
<ng-template #titleTemplate>...</ng-template>
<button class="btn btn-outline-info"
  nzbPopover
  #popoverInstance="nzbPopover"
  [nzbPopoverTitle]="titleTemplate"
  data-content="Some static content.">
  Title from Template
</button>

  `

}

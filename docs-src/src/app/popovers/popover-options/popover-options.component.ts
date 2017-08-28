import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-popover-options',
  templateUrl: './popover-options.component.html',
  styleUrls: ['./popover-options.component.scss']
})
export class PopoverOptionsComponent implements OnInit {

  baseId: string;
  constructor() { }

  ngOnInit() {
    this.baseId = _.uniqueId('app-popover-title')
  }

  appDefaultsTs = `

// other imports
import { NzbModule, NzbPopoverOptions } from 'nowzoo-angular-bootstrap-lite';

@NgModule({
  //etc...
  imports: [
    NzbModule
    //etc..
  ],
  providers: [
    { provide: NzbPopoverOptions, useValue: {animation: false} }
  ],
})
export class AppModule { }`

  animateOnDestroyDemoTs = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-animate-on-destroy-demo',
  templateUrl: './popover-animate-on-destroy-demo.component.html',
})
export class PopoverAnimateOnDestroyDemoComponent {
  trueBtnExists: boolean = true;
  falseBtnExists: boolean = true;
}

  `
  animateOnDestroyDemoHtml = `
<div class="row align-items-center mb-3">
  <div class="col-md">
    <p>
      <code>animateOnDestroy: false</code>
    </p>
    <p>
      Hides and destroys the popover immediately
      when its target is destroyed.
    </p>
    <p>
      <small class="text-muted">
        Toggle the popover, then click "Destroy Target Element"
      </small>
    </p>
  </div>
  <div class="col-md">
    <div class="card card-body">

      <div *ngIf="falseBtnExists">
        <p>
          <button class="btn btn-outline-info"
            nzbPopover
            [nzbPopoverOptions]="{animateOnDestroy: false}"
            title="Static Title"
            data-content="Static content.">Popover Target</button>
        </p>
        <p class="text-muted">
          The target element exists.
        </p>
        <p style="margin-bottom:0">
          <button class="btn btn-secondary btn-sm"
           (click)="falseBtnExists=false">
            Destroy Target Element
          </button>
        </p>


      </div>

      <div *ngIf="!falseBtnExists">
        <p class="text-muted">
          The target element has been destroyed.
        </p>
        <p style="margin-bottom:0">
          <button class="btn btn-secondary btn-sm"
           (click)="falseBtnExists=true">
            Restore Target Element
          </button>
        </p>
      </div>
    </div>

  </div>
</div>

<div class="row align-items-center">
  <div class="col-md">
    <p>
      <code>animateOnDestroy: true</code> (default)
    </p>
    <p>
      The popover is hidden gracefully before being destroyed.
    </p>
    <p>
      <small class="text-muted">
        Toggle the popover, then click "Destroy Target Element"
      </small>
    </p>
  </div>
  <div class="col-md">
    <div class="card card-body">


      <div *ngIf="trueBtnExists">
        <p>
          <button class="btn btn-outline-info"
            nzbPopover
            title="Static Title"
            [nzbPopoverOptions]="{animateOnDestroy: true}"
            data-content="Static content.">Popover Target</button>
        </p>
        <p class="text-muted">
          The target element exists.
        </p>
        <p style="margin-bottom:0">
          <button class="btn btn-secondary btn-sm"
           (click)="trueBtnExists=false">
            Destroy Target Element
          </button>
        </p>



      </div>

      <div *ngIf="!trueBtnExists">
        <p class="text-muted">
          The target element has been destroyed.
        </p>
        <p style="margin-bottom:0">
          <button class="btn btn-secondary btn-sm"
           (click)="trueBtnExists=true">
            Restore Target Element
          </button>
        </p>
      </div>
    </div>

  </div>
</div>
  `

  bsOptionsDemoTs = `import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-options-demo',
  templateUrl: './popover-options-demo.component.html'
})
export class PopoverOptionsDemoComponent  {

  dangerTemplate = '<div class="popover popover-danger" role="tooltip">' +
      '<div class="arrow"></div>' +
      '<h3 class="popover-header"></h3>' +
      '<div class="popover-body"></div>' +
    '</div>';

}  `

  bsOptionsDemoHtml = `
<h6>Animation</h6>
<p>
  <button class="btn btn-outline-info"
    nzbPopover
    title="Static Title"
    [nzbPopoverOptions]="{animation: false}"
    data-content="Static content.">animation: false</button>
  <button class="btn btn-outline-info"
    nzbPopover
    title="Static Title"
    [nzbPopoverOptions]="{animation: true}"
    data-content="Static content.">animation: true</button>
</p>
<h6>Container</h6>
<p id="popover-example-ctr">
  <button class="btn btn-outline-info"
    nzbPopover
    title="Static Title"
    [nzbPopoverOptions]="{container: '#popover-example-ctr'}"
    data-content="Static content.">container: '#popover-example-ctr'</button>
  <button class="btn btn-outline-info"
    nzbPopover
    title="Static Title"
    [nzbPopoverOptions]="{container: false}"
    data-content="Static content.">container: false</button>
</p>
<h6>Delay</h6>
<p id="popover-example-ctr">
  <button class="btn btn-outline-info"
    nzbPopover
    title="Static Title"
    [nzbPopoverOptions]="{delay: 1000}"
    data-content="Static content.">delay: 1000</button>
  <button class="btn btn-outline-info"
    nzbPopover
    title="Static Title"
    [nzbPopoverOptions]="{delay: 0}"
    data-content="Static content.">delay: 0</button>
</p>
<h6>HTML</h6>
<p>
  <button class="btn btn-outline-info"
    nzbPopover
    [nzbPopoverOptions]="{html: true}"
    title="<strong>Bold Title</strong>"
    data-content="Static <strong>content</strong>.">html: true</button>

  <button class="btn btn-outline-info"
    nzbPopover
    [nzbPopoverOptions]="{html: false}"
    title="<strong>Bold Title</strong>"
    data-content="Static <strong>content</strong>.">html: false</button>
</p>
<h6>Placement</h6>
<p>
  <button class="btn btn-outline-info"
    nzbPopover
    [nzbPopoverOptions]="{placement: 'bottom'}"
    title="Static Title"
    data-content="Static content.">placement: 'bottom'</button>
  <button class="btn btn-outline-info"
    nzbPopover
    [nzbPopoverOptions]="{placement: 'top'}"
    title="Static Title"
    data-content="Static content.">placement: 'top'</button>
</p>
<h6>Template</h6>
<p>
  <button class="btn btn-outline-info"
    nzbPopover
    [nzbPopoverOptions]="{template: dangerTemplate}"
    title="Static Title"
    data-content="Static content.">template: dangerTemplate</button>
</p>

<h6>Trigger</h6>
<p>
  <button class="btn btn-outline-info"
    nzbPopover
    [nzbPopoverOptions]="{trigger: 'hover'}"
    title="Static Title"
    data-content="Static content.">trigger: 'hover'</button>
</p>

  `

}

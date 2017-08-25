import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-popover-demo-hide-on-route-change',
  template: `<p>
  <button class="btn btn-outline-info"
    nzbPopover
    #popoverInstance="nzbPopover"
    title="Popover"
    data-placement="bottom"
    [nzbPopoverContent]="popoverContent">
    Popover Demo (Click)</button>
  </p>
  <ng-template #popoverContent>
    <p>
      Click on the link below to see how the popover
      gracefully disapears when its target
      is destroyed.
    </p>
    <p>
      <a routerLink="/popovers">
        Back to Popovers
      </a>
    </p>
  </ng-template>
  `
})
export class PopoverDemoHideOnRouteChangeComponent implements AfterViewInit {
  @ViewChild('popoverInstance') popoverInstance: NzbPopoverDirective;
  ngAfterViewInit() {
    setTimeout(() => {
        this.popoverInstance.show();
    })
  }
}

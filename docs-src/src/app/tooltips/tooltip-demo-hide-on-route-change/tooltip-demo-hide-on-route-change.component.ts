import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NzbTooltipDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-tooltip-demo-hide-on-route-change',
  template: `<p>
  <button class="btn btn-primary"
    nzbTooltip
    #tooltipInstance="nzbTooltip"
    title="Tooltip goes away nicely">
    Tooltip Demo</button>
  </p>
  `
})
export class TooltipDemoHideOnRouteChangeComponent implements AfterViewInit {
  @ViewChild('tooltipInstance') tooltipInstance: NzbTooltipDirective;
  ngAfterViewInit() {
    setTimeout(() => {
        this.tooltipInstance.show();
    })
  }
}

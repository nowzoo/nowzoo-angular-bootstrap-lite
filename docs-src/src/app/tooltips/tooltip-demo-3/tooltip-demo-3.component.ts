import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-demo-3',
  template: `
  <button class="btn btn-primary"
    nzbTooltip
    data-title="<strong>Hey</strong>, this is the tooltip title."
    data-animation="false"
    data-placement="right"
    data-offset="0px,10px"
    data-delay="100"
    data-html="true"
    data-container="body"
    data-trigger="click"
    data-fallbackPlacement="flip">Tooltip w/ Data Attributes</button>
    <br>
    <small class="text-muted">Click to trigger</small>
  `,
  styles: []
})
export class TooltipDemo3Component {}

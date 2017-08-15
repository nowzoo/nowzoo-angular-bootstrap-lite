import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-demo-0',
  template: `<p>
  <button class="btn btn-primary"
    nzbTooltip
    title="This is a static tooltip title.">
    Simple Tooltip</button>
  </p>`
})
export class TooltipDemo0Component {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-demo-attributes',
  template: `<p>
  <button class="btn btn-primary"
    nzbTooltip
    title="Static tooltip title"
    data-placement="auto">
    Tooltip Demo (Hover)</button>
  </p>`
})
export class TooltipDemoAttributesComponent {}

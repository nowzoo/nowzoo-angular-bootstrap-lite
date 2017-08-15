import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-demo-2',
  template: `<p>
  <button class="btn btn-primary"
    nzbTooltip
    [nzbTooltipPlacement]="getPlacement"
    title="This is tooltip was placed by a function.">
    Placement via function</button>
  </p>
  `
})
export class TooltipDemo2Component  {
  constructor() { }

  getPlacement(tooltipEl, targetEl){
    // do some fancy calculation here...
    return 'bottom';
  }
}

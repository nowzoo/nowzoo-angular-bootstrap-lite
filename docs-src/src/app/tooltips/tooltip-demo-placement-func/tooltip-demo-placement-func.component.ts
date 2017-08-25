import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-demo-placement-func',
  template: `<p>
  <button class="btn btn-primary"
    nzbTooltip
    title="This tooltip was placed by a function.">
    Tooltip Demo (Hover)</button>
  </p>
  `
})
export class TooltipDemoPlacementFuncComponent  {
  getPlacement(tooltipEl, targetEl){
    // do some fancy calculation here based on the small breakpoint...
    if (window.innerWidth < 576){
      return 'top';
    } else {
      return 'left';
    }
  }
}

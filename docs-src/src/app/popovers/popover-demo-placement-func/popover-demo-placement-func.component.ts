import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-demo-placement-func',
  template: `<p>
  <button class="btn btn-outline-info"
    nzbPopover
    title="Placement Function"
    data-content="This popover was placed by a function.">
    Popover Demo (Click)</button>
  </p>
  `
})
export class PopoverDemoPlacementFuncComponent  {
  getPlacement(tooltipEl, targetEl){
    // do some fancy calculation here based on the small breakpoint...
    if (window.innerWidth < 576){
      return 'top';
    } else {
      return 'left';
    }

  }
}

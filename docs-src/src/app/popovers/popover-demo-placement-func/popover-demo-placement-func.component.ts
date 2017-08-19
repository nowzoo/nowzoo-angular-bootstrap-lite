import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-demo-placement-func',
  template: `<p>
  <button class="btn btn-primary"
    nzbPopover
    [nzbPopoverPlacement]="getPlacement"
    title="Placement Function"
    data-content="This popover was placed by a function.">
    Placement via function</button>
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

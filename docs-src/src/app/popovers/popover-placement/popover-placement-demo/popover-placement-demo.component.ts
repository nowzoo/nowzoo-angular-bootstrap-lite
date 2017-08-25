import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-placement-demo',
  templateUrl: './popover-placement-demo.component.html',
})
export class PopoverPlacementDemoComponent {
  myFunc(tooltipEl, targetEl){
    // do some fancy calculation here based on the small breakpoint...
    if (window.innerWidth < 576){
      return 'top';
    } else {
      return 'left';
    }
  }
}

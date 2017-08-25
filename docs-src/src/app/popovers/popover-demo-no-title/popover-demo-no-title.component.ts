import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-demo-no-title',
  template: `<p>
  <button class="btn btn-outline-info"
    nzbPopover
    data-placement="auto"
    data-content="This popover does not have a title.">
    Popover Demo (Click)</button>
  </p>`
})
export class PopoverDemoNoTitleComponent {}

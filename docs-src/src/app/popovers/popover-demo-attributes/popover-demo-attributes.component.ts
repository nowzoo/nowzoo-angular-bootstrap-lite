import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-demo-attributes',
  template: `<p>
  <button class="btn btn-outline-info"
    nzbPopover
    title="Static Title"
    data-placement="auto"
    data-content="Some static popover content.">
    Popover Demo (Click)
    </button>
  </p>`
})
export class PopoverDemoAttributesComponent {}

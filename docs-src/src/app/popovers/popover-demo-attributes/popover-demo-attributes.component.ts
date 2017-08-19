import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-demo-attributes',
  template: `<p>
  <button class="btn btn-primary"
    nzbPopover
    title="Static Title"
    data-placement="auto"
    data-content="Some static popover content.">
    Simple Popover Example</button>
  </p>`
})
export class PopoverDemoAttributesComponent {}

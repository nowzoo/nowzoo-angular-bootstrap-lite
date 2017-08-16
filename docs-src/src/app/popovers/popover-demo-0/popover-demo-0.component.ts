import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-demo-0',
  template: `<p>
  <button class="btn btn-primary"
    nzbPopover
    title="Static Title"
    data-content="Some static popover content.">
    Simple Popover Example</button>
  </p>`
})
export class PopoverDemo0Component {}

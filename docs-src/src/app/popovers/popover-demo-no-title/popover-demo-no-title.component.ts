import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-demo-no-title',
  template: `<p>
  <button class="btn btn-primary"
    nzbPopover
    data-placement="auto"
    data-content="This popover does not have a title.">
    Popover Without Title</button>
  </p>`
})
export class PopoverDemoNoTitleComponent {}

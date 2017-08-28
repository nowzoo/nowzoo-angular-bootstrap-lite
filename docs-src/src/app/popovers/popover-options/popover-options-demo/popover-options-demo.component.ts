import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-options-demo',
  templateUrl: './popover-options-demo.component.html'
})
export class PopoverOptionsDemoComponent  {

  dangerTemplate = '<div class="popover popover-danger" role="tooltip">' +
      '<div class="arrow"></div>' +
      '<h3 class="popover-header"></h3>' +
      '<div class="popover-body"></div>' +
    '</div>';

}

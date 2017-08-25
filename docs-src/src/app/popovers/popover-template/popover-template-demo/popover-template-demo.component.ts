import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-template-demo',
  templateUrl: './popover-template-demo.component.html',
})
export class PopoverTemplateDemoComponent {
  dangerTemplate = `
    <div class="popover popover-danger" role="tooltip">
      <div class="arrow"></div>
      <h3 class="popover-header"></h3>
      <div class="popover-body"></div>
    </div>
  `;

}

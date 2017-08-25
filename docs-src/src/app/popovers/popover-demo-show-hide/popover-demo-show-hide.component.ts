import { Component} from '@angular/core';

@Component({
  selector: 'app-popover-demo-show-hide',
  template: `
    <p>
      <button class="btn btn-outline-info"
        nzbPopover
        #popoverInstance="nzbPopover"
        title="Show/Hide/Toggle Example"
        data-placement="top"
        data-content="This popover was shown programmatically."
        data-trigger="manual">Popover Demo (Manual)</button>
    </p>
    <p>
      <button class="btn btn-secondary btn-sm"
      [disabled]="popoverInstance.shown"
      (click)="popoverInstance.show()">show()</button>
      <button class="btn btn-secondary btn-sm"
      [disabled]="popoverInstance.hidden"
      (click)="popoverInstance.hide()">hide()</button>
      <button class="btn btn-secondary btn-sm"
      (click)="popoverInstance.toggle()">toggle()</button>
    </p>
  `,
})
export class PopoverDemoShowHideComponent  {}

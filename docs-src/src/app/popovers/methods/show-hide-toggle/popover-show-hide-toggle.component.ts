import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-show-hide-toggle',
  templateUrl: './popover-show-hide-toggle.component.html',
  styles: []
})
export class PopoverShowHideToggleComponent {

  html = `
  <p>
    <button class="btn btn-outline-info"
      nzbPopover
      #popoverInstance="nzbPopover"
      title="show/hide/toggle Demo"
      data-placement="top"
      data-content="This popover was shown programmatically."
      data-trigger="manual">show/hide/toggle Demo</button>
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
  `

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-enable-disable',
  templateUrl: './popover-enable-disable.component.html',
  styles: []
})
export class PopoverEnableDisableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  html = `
<p>
  <button class="btn btn-outline-info"
    nzbPopover
    #popoverInstance="nzbPopover"
    title="Enable/Disable Demo"
    data-placement="auto"
    data-content="Hi there.">
    Popover Demo (Click)
    <span *ngIf="popoverInstance.enabled">- Enabled</span>
    <span *ngIf="!popoverInstance.enabled">- Disabled</span>
  </button>
</p>
<p>
  <button class="btn btn-secondary btn-sm"
  [disabled]="popoverInstance.enabled"
  (click)="popoverInstance.enable()">enable()</button>
  <button class="btn btn-secondary btn-sm"
  [disabled]="!popoverInstance.enabled"
  (click)="popoverInstance.disable()">disable()</button>
  <button class="btn btn-secondary btn-sm"
  (click)="popoverInstance.toggleEnabled()">toggleEnabled()</button>
</p>
  `

}

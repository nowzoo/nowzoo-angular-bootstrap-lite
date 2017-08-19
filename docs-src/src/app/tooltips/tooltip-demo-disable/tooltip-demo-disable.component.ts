import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-demo-disable',
  template: `
    <p>
      <button class="btn btn-primary"
        nzbTooltip
        #tooltipInstance="nzbTooltip"
        title="Enable/Disable Demo"
        data-placement="auto">
        Tooltip Demo (Hover)
        <span *ngIf="tooltipInstance.enabled"> - Enabled</span>
        <span *ngIf="!tooltipInstance.enabled"> - Disabled</span>
      </button>
    </p>
    <p>
      <button class="btn btn-secondary btn-sm"
      [disabled]="tooltipInstance.enabled"
      (click)="tooltipInstance.enable()">enable()</button>
      <button class="btn btn-secondary btn-sm"
      [disabled]="!tooltipInstance.enabled"
      (click)="tooltipInstance.disable()">disable()</button>
      <button class="btn btn-secondary btn-sm"
      (click)="tooltipInstance.toggleEnabled()">toggleEnabled()</button>
    </p>
  `
})
export class TooltipDemoDisableComponent {}

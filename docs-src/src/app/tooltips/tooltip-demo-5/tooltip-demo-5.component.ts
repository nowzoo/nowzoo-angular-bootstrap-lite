import { Component, ViewChild} from '@angular/core';
import { NzbTooltipDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-tooltip-demo-5',
  template: `
    <p>
      <button class="btn btn-primary"
        nzbTooltip
        #tooltipInstance="nzbTooltip"
        title="This is the tooltip title.">Tooltip</button>
    </p>
    <p>
      <button class="btn btn-secondary btn-sm"
      [disabled]="enabled"
      (click)="enable()">enable()</button>
      <button class="btn btn-secondary btn-sm"
      [disabled]="!enabled"
      (click)="disable()">disable()</button>
      <button class="btn btn-secondary btn-sm"
      (click)="toggleEnabled()">toggleEnabled()</button>
    </p>
  `,
  styles: []
})
export class TooltipDemo5Component  {
  @ViewChild('tooltipInstance') tooltipInstance: NzbTooltipDirective;

  enabled: boolean = true;
  constructor() { }

  enable() {
    this.tooltipInstance.enable();
    this.enabled = ! this.enabled;
  }
  disable() {
    this.tooltipInstance.disable();
    this.enabled = ! this.enabled;

  }
  toggleEnabled() {
    this.tooltipInstance.toggleEnabled();
    this.enabled = ! this.enabled;

  }
}

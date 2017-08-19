import { Component} from '@angular/core';

@Component({
  selector: 'app-tooltip-demo-show-hide',
  template: `
    <p>
      <button class="btn btn-primary"
        nzbTooltip
        #tooltipInstance="nzbTooltip"
        title="Show/Hide/Toggle Example"
        data-placement="top"
        data-trigger="manual">Tooltip Demo (Manual)</button>
    </p>
    <p>
      <button class="btn btn-secondary btn-sm"
      [disabled]="tooltipInstance.shown"
      (click)="tooltipInstance.show()">show()</button>
      <button class="btn btn-secondary btn-sm"
      [disabled]="tooltipInstance.hidden"
      (click)="tooltipInstance.hide()">hide()</button>
      <button class="btn btn-secondary btn-sm"
      (click)="tooltipInstance.toggle()">toggle()</button>
    </p>
  `,
})
export class TooltipDemoShowHideComponent  {}

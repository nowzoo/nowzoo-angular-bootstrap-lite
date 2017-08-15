import { Component, ViewChild } from '@angular/core';
declare const jQuery: any;
@Component({
  selector: 'app-tooltip-demo-7',
  template: `
    <p>
      <button class="btn btn-primary"
        nzbTooltip
        #tooltipInstance="nzbTooltip"
        data-trigger="manual"
        data-placement="right"
        (click)="tooltipInstance.toggle()"
        title="Tooltip title.">Tooltip</button>
    </p>
    <p>
      <button class="btn btn-secondary btn-sm"
        (click)="toggleClass()">Toggle .danger class</button>
    </p>
    <p><strong>Tip class</strong></p>
    <pre>{{tipClass}}</pre>
  `
})
export class TooltipDemo7Component  {
  @ViewChild('tooltipInstance') tooltipInstance: any;

  tipClass: string;
  ngAfterViewInit(){
    this.tooltipInstance.getStatus().subscribe(() => {
      const data = this.tooltipInstance.getPopupData();
      if (data){
        this.tipClass = jQuery(data.tip).attr('class');
      }

    });
    this.tooltipInstance.show();
  }

  toggleClass(){
    const tip = this.tooltipInstance.getPopupData().tip;
    jQuery(tip).toggleClass('danger');
    this.tipClass = jQuery(tip).attr('class');
  }

}

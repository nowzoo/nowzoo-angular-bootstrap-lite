import { Component, AfterViewInit, OnDestroy, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tooltip-demo-templates',
  template: `
  <!-- templates example -->
  <p>
    <button class="btn btn-primary"
      nzbTooltip
      [nzbTooltipTitle]="titleTemplate"
      data-placement="auto"
      #tooltipInstance="nzbTooltip">Tooltip Demo (Hover)</button>
  </p>
  <ng-template #titleTemplate >
    <i class="fa fa-clock-o fa-spin"></i>
    This popover has been open for
    {{seconds}} second<span *ngIf="seconds!==1">s</span>!
  </ng-template>
  `
})
export class TooltipDemoTemplatesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('tooltipInstance') tooltipInstance: any;
  interval: any = null;
  seconds: number = 0;
  constructor() { }

  ngAfterViewInit() {
    this.tooltipInstance.events.subscribe((nativeBsEvent: Event) => {
      switch(nativeBsEvent.type){
        case 'show':
          this.seconds = 0;
          this.interval = setInterval(() => {
            this.seconds++;
          }, 1000);
          break;
        case 'hidden':
          clearInterval(this.interval);
          this.interval = null;
          break;
      }
    })
  }

  ngOnDestroy() {
    if (this.interval){
      clearInterval(this.interval);
    }
  }
}

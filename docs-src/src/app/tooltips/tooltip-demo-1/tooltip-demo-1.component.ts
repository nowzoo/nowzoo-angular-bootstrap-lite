import { Component, AfterViewInit, OnDestroy, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tooltip-demo-1',
  template: `
  <!-- template example -->
  <p>
    <button class="btn btn-primary"
      nzbTooltip
      [nzbTooltipTitle]="myFancyTip"
      #tip="nzbTooltip">Fancy Tooltip from Template</button>
  </p>
  <ng-template #myFancyTip>
    <i class="fa fa-clock-o"></i>
    This tooltip has been open for
    {{seconds}} second<span *ngIf="seconds!==1">s</span>!
  </ng-template>

  `
})
export class TooltipDemo1Component implements AfterViewInit, OnDestroy {
  @ViewChild('tip') tooltipInstance: any;
  interval: any = null;
  seconds: number = 0;
  constructor() { }

  ngAfterViewInit() {
    this.tooltipInstance.getEvents().subscribe((nativeBsEvent: Event) => {
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

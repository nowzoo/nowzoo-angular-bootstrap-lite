import { Component, AfterViewInit, OnDestroy, ViewChild} from '@angular/core';

@Component({
  selector: 'app-popover-demo-1',
  template: `
  <!-- templates example -->
  <p>
    <button class="btn btn-primary"
      nzbPopover
      [nzbPopoverTitle]="titleTemplate"
      [nzbPopoverContent]="contentTemplate"
      #popoverInstance="nzbPopover">Fancy Popover from Template</button>
  </p>
  <ng-template #titleTemplate >
    <div class="clearfix">
      <div class="pull-left">
      Fancy Header
      </div>

      <i
      (click)="popoverInstance.hide()"
       type="button"
       class="fa fa-times pull-right"
       aria-label="Close"></i>
    </div>
  </ng-template>
  <ng-template #contentTemplate >
    <i class="fa fa-clock-o fa-spin"></i>
    This popover has been open for
    {{seconds}} second<span *ngIf="seconds!==1">s</span>!
  </ng-template>

  `
})
export class PopoverDemo1Component implements AfterViewInit, OnDestroy {
  @ViewChild('popoverInstance') popoverInstance: any;
  interval: any = null;
  seconds: number = 0;
  constructor() { }

  ngAfterViewInit() {
    this.popoverInstance.getEvents().subscribe((nativeBsEvent: Event) => {
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

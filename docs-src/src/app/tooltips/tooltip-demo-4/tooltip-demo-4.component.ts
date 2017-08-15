import { Component, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbTooltipDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-tooltip-demo-4',
  template: `
    <p>
      <button class="btn btn-primary"
        nzbTooltip
        #tooltipInstance="nzbTooltip"
        title="This is the tooltip title."
        data-trigger="manual">Tooltip</button>
    </p>
    <p>
      <button class="btn btn-secondary btn-sm"
      [disabled]="status==='shown'"
      (click)="show()">show()</button>
      <button class="btn btn-secondary btn-sm"
      [disabled]="status==='hidden'"
      (click)="hide()">hide()</button>
      <button class="btn btn-secondary btn-sm"
      (click)="toggle()">toggle()</button>
    </p>
  `,
  styles: []
})
export class TooltipDemo4Component implements AfterViewInit, OnDestroy  {
  @ViewChild('tooltipInstance') tooltipInstance: NzbTooltipDirective;

  private subscription: Subscription;

  status: string;

  constructor() { }

  ngAfterViewInit() {
    this.subscription = this.tooltipInstance.getStatus().subscribe(status => {
      this.status = status;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  show() {
    this.tooltipInstance.show();
  }
  hide() {
    this.tooltipInstance.hide();
  }
  toggle() {
    this.tooltipInstance.toggle();
  }
}

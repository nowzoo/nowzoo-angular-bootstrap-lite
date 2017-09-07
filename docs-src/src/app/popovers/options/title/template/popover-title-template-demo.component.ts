import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-popover-title-template-demo',
  templateUrl: './popover-title-template-demo.component.html',
  styleUrls: ['./popover-title-template-demo.component.scss']
})
export class PopoverTitleTemplateDemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('popoverInstance') popoverInstance: NzbPopoverDirective;
  shownFor: number;
  private interval: any;
  private sub: Subscription;

  constructor() { }

  ngAfterViewInit() {
    this.sub = this.popoverInstance.events.subscribe((event: Event) => {

      switch(event.type) {
        case 'shown':
          this.popoverInstance.update();
          this.shownFor = 0;
          this.interval = setInterval(() => {
            this.shownFor++;
          }, 1000)
          break;
        case 'hide':
          clearInterval(this.interval);
          break;
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    clearInterval(this.interval);
  }

}

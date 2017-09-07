import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as moment from 'moment';

import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-popover-quickstart-demo',
  templateUrl: './popover-quickstart-demo.component.html'
})
export class PopoverQuickstartDemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('popoverInstance') popoverInstance: NzbPopoverDirective;
  shownAt: any;
  shownFor: number;
  private interval: any;
  private sub: Subscription;
  ngAfterViewInit() {
    this.sub = this.popoverInstance.events.subscribe((event: Event) => {

      switch(event.type) {
        case 'shown':
          this.popoverInstance.update();
          this.shownFor = 0;
          this.shownAt = moment();
          this.interval = setInterval(() => {
            this.shownFor = Math.floor((moment().valueOf() - this.shownAt.valueOf())/1000);
            this.popoverInstance.update();
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

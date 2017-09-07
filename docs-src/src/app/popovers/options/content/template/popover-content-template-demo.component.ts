import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-popover-content-template-demo',
  templateUrl: './popover-content-template-demo.component.html',
  styleUrls: ['./popover-content-template-demo.component.scss']
})
export class PopoverContentTemplateDemoComponent implements AfterViewInit, OnDestroy {
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
            this.popoverInstance.update();
          }, 1000)
          break;
        case 'hide':
          clearInterval(this.interval);
          break;
      }
    })
  }
//https://www.facebook.com/Lionheart-108392693187749/
  ngOnDestroy() {
    this.sub.unsubscribe();
    clearInterval(this.interval);
  }

}

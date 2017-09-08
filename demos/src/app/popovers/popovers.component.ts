import {
  Component,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Renderer2
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.scss']
})
export class PopoversComponent implements AfterViewInit, OnDestroy {
  @ViewChild('popover2') popover2: NzbPopoverDirective;
  @ViewChild('popover7') popover7: NzbPopoverDirective;
  shownFor: number = 0;
  popover7BodyClickListener: any = null;
  private popover2Sub: Subscription;
  private popover7Sub: Subscription;
  private interval: any;
  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    // set up the ng-templates demo...
    this.popover2Sub = this.popover2.status.subscribe((status: string) => {
      switch(status) {
        case 'show':
          this.shownFor = 0;
          this.interval = setInterval(() =>{
            this.shownFor++;
          }, 1000);
          break;
        case 'hidden':
          if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
          }
          break;
      }
    });

    // set up the click outside demo...
    this.popover7Sub = this.popover7.status.subscribe((status: string) => {

      switch(status) {
        case 'shown':
          this.popover7BodyClickListener = this.renderer.listen(document.body, 'click', (event: Event) => {
            // don't respond to clicks in the popover
            if (! this.popover7.data.tip.contains(event.target)) {
              // the click occurred outside, so close the popover...
              this.popover7.hide();
            }
            // the click is inside the popover, so do nothing
          })
          break;
        case 'hide':
          this.popover7BodyClickListener();
          this.popover7BodyClickListener = null;
          break;
      }

    })
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.popover2Sub.unsubscribe();
    if (this.popover7BodyClickListener) {
      this.popover7BodyClickListener();
      this.popover7BodyClickListener = null;
    }
    this.popover7Sub.unsubscribe();
  }

}

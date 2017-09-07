import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  Renderer2
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-popover-demo-dismiss-on-click-outside',
  template: `
  <p>
    <button class="btn btn-outline-info"
      nzbPopover
      #popoverInstance="nzbPopover"
      title="Enter your name..."
      [nzbPopoverContent]="popoverContent"
      data-placement="auto"
      data-trigger="click">
      Enter Name...
    </button>
    <ng-template #popoverContent>
      <div class="form-group">
        <label for="app-popover-demo-dismiss-on-click-outside-name">Name</label>
        <input type="text" class="form-control" [(ngModel)]="enteredInPopover">
      </div>
      <div class="form-group">
        <button
        class="btn btn-secondary"
        (click)="popoverInstance.hide();">
        Cancel</button>
        <button
        class="btn btn-success"
        (click)="name = enteredInPopover; popoverInstance.hide();">
        Save</button>
      </div>
    </ng-template>

  </p>
  <p>Hello, {{name}}</p>
  `
})
export class PopoverDemoDismissOnClickOutsideComponent implements AfterViewInit, OnDestroy {
  @ViewChild('popoverInstance') popoverInstance: NzbPopoverDirective;
  name: string = 'World';
  enteredInPopover: string = '';
  private eventsSub: Subscription;
  private bodyClickUnlisten: () => void | null = null;

  constructor(
    private renderer: Renderer2
  ){}

  ngAfterViewInit(){
    this.eventsSub = this.popoverInstance.events.subscribe((event:Event) => {
      if ('shown' === event.type){
        this.bodyClickUnlisten = this.renderer.listen(document.body, 'click', (event: Event) => {
          // don't respond to clicks in the popover
          if (! this.popoverInstance.boostrapComponentData.tip.contains(event.target)) {
            // the click occurred outside, so close the popover...
            this.popoverInstance.hide();
          }
          // the click is inside the popover, so do nothing

        })
        this.enteredInPopover = this.name;
      }
      if ('hide' === event.type){
        // clean up the listener...
        this.bodyClickUnlisten();
        this.bodyClickUnlisten = null;
      }
    })
  }
  ngOnDestroy() {
    if (this.bodyClickUnlisten){
      this.bodyClickUnlisten();
    }
    this.eventsSub.unsubscribe();
  }

}

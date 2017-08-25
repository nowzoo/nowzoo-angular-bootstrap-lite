import { Component, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-modal-demo-events',
  templateUrl: './modal-demo-events.component.html'
})
export class ModalDemoEventsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;
  private sub: Subscription;
  last5: Event[] = [];

  ngAfterViewInit() {
    this.sub = this.modalInstance.events.subscribe((event:Event) => {
      this.last5.push(event);
      this.last5 = this.last5.slice(Math.max(this.last5.length - 5, 0));
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}

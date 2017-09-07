import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-modal-observables',
  templateUrl: './modal-observables.component.html',
  styleUrls: ['./modal-observables.component.scss']
})
export class ModalObservablesComponent implements AfterViewInit, OnDestroy {
  @Input() modal: NzbModalDirective;

  private eventsSub: Subscription;
  private events: Event[] = [];
  last5: Event[] = [];

  constructor() { }

  ngAfterViewInit() {
    this.eventsSub = this.modal.events.subscribe((event: Event) => {
      this.events.push(event);
      this.last5 = this.events.slice(Math.max(this.events.length - 5, 0));
    });
  }

  ngOnDestroy() {
    this.eventsSub.unsubscribe();
  }

}

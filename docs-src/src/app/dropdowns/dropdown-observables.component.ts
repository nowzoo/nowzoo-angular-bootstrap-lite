import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbDropdownDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-dropdown-observables',
  templateUrl: './dropdown-observables.component.html',
  styleUrls: ['./dropdown-observables.component.scss']
})
export class DropdownObservablesComponent implements AfterViewInit, OnDestroy {
  @Input() dropdown: NzbDropdownDirective;

  constructor() { }

  private eventsSub: Subscription;
  private events: Event[] = [];
  last5: Event[] = [];


  ngAfterViewInit() {
    this.eventsSub = this.dropdown.events.subscribe((event: Event) => {
      this.events.push(event);
      this.last5 = this.events.slice(Math.max(this.events.length - 5, 0));
    });
  }

  ngOnDestroy() {
    this.eventsSub.unsubscribe();
  }
}

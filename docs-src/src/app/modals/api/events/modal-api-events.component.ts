import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-api-events',
  templateUrl: './modal-api-events.component.html',
  styles: []
})
export class ModalApiEventsComponent implements OnInit {

  snip = `
this.modalInstance.events.subscribe((event:Event) => {})
  `;

  ts = `
import { Component, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-modal-api-events-demo',
  templateUrl: './modal-api-events-demo.component.html'
})
export class ModalApiEventsDemoComponent {
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

  `;
  html = `
<p>
  <button class="btn btn-primary" (click)="modalInstance.show()">
    Show Modal
  </button>
</p>
<p><strong>Last 5 Events</strong></p>
<ul>
  <li *ngFor="let e of last5">
    {{e.type}}.{{e.namespace}} at {{e.timeStamp | amDateFormat: 'H:mm:ss.SSSS'}}
  </li>
</ul>
<!-- the modal template -->
<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Events Example</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        This is some modal content.
        </div>
        <div class="modal-footer">
          <button
            type="button" class="btn btn-secondary"
            data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</ng-template>

  `;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const jQuery: any;
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  gistFiles: any = {};
  gistId: string = 'cdcarson/9a7fa3f1128dff5f353edf209ed07e35';







demoEventsTs = `
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
`
demoEventsHtml = `
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

`



demoStatusHtml = `
<p>
  <button class="btn btn-primary" (click)="modalInstance.show()">
    Show Modal
  </button>
</p>
<p>
  <strong>Status:</strong>
  {{modalInstance.status | async}}
</p>
<!-- the modal template -->
<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Status Example</h5>
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
`
demoStatusSnip = `
  <strong>Status:</strong>
  {{modalInstance.status | async}}
`

demoAnimationSnip = `
<!-- animation ON -->
<ng-template nzbModal #animatedInstance="nzbModal">
  <!-- note .fade class -->
  <div class="modal fade" tabindex="-1">....</div>
 </ng-template>

<!-- animation OFF -->
<ng-template nzbModal #inanimateInstance="nzbModal">
  <!-- note no .fade class -->
  <div class="modal" tabindex="-1">....</div>
 </ng-template>
`
demoAnimationFull = `
<!-- animation ON -->
<ng-template nzbModal #animatedInstance="nzbModal">
  <!-- note .fade class -->
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Animated Modal</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            I am animated.
          </p>
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

<!-- animation OFF -->
<ng-template nzbModal #inanimateInstance="nzbModal">
  <!-- note absence of .fade class -->
  <div class="modal" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Inanimate Modal</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            I am not animated.
          </p>
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

<div class="row align-items-center mb-3">
  <div class="col-md">
    <p>
      <code>&lt;div class="modal fade"&gt; ... &lt;/div&gt;</code>
    </p>

  </div>
  <div class="col-md">
    <p>
      <button class="btn btn-primary" (click)="animatedInstance.show()">
        Animated Modal
      </button>
    </p>
  </div>
</div>

<div class="row align-items-center">
  <div class="col-md">
    <p>
       <code>&lt;div class="modal"&gt; ... &lt;/div&gt;</code>
    </p>

  </div>
  <div class="col-md">
    <p>
      <button class="btn btn-primary" (click)="inanimateInstance.show()">
        Inanimate Modal
      </button>
    </p>
  </div>
</div>

`
  constructor(

  ) { }

  ngOnInit(): void {

  }

}

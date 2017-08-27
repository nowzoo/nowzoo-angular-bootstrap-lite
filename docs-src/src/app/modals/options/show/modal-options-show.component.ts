import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-options-show',
  templateUrl: './modal-options-show.component.html',
  styles: []
})
export class ModalOptionsShowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  snip = `
export class ModalOptionsShowDemoComponent implements AfterViewInit {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;
  ngAfterViewInit() {
    setTimeout(() => {
      this.modalInstance.show();
    })
  }
}
  `;
  ts = `
import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-modal-options-show-demo',
  templateUrl: './modal-options-show-demo.component.html'
})
export class ModalOptionsShowDemoComponent implements AfterViewInit {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;
  ngAfterViewInit() {
    setTimeout(() => {
      this.modalInstance.show();
    })
  }
}
  `

  html = `
  <ng-template nzbModal #modalInstance="nzbModal">
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Welcome to this page</h5>
            <button type="button" class="close"
              data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              I was shown immediately by the <code>ngAfterViewInit</code>
              hook in the component that contains me.
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
  <div class="jumbotron">
    <h1 class="display-3">
      Modal Shown Immediately Demo
    </h1>
    <p class="lead">
      The modal on this page was shown immediately when the route component was
      instantiated.

    </p>
    <p>
      <a routerLink="/modals" fragment="options-show" class="btn btn-primary">
        Back to Demo
      </a>
    </p>

  </div>


  `

}

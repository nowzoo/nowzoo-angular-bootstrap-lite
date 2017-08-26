import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-api-show',
  templateUrl: './modal-api-show.component.html',
  styles: []
})
export class ModalApiShowComponent implements OnInit {

  demoTs = `import { Component, ViewChild } from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-modal-api-show-demo',
  templateUrl: './modal-demo-show.component.html'
})
export class ModalApiShowDemoComponent {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;
  showTheModal(){
    this.modalInstance.show();
  }
}

`;
  demoHtml = `
<div class="row align-items-center mb-3">
  <div class="col-md">
    <p>
      The first button uses <code>(click)="modalInstance.show()"</code>
      in the HTML template to show the modal.
    </p>

  </div>
  <div class="col-md">
    <p>
      <button (click)="modalInstance.show()" class="btn btn-primary">
        Show Modal
      </button>
    </p>
  </div>
</div>

<div class="row align-items-center">
  <div class="col-md">
    <p>
      The second button shows the modal from a method in the component.
    </p>

  </div>
  <div class="col-md">
    <p>
      <button (click)="showTheModal()" class="btn btn-primary">
        Show Modal
      </button>
    </p>
  </div>
</div>

<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Show Modal Demo</h5>
          <button type="button" class="close"
            (click)="modalInstance.hide()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            This is a modal.
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button" class="btn btn-secondary"
            (click)="modalInstance.hide()">Close</button>
        </div>
      </div>
    </div>
  </div>
</ng-template>
  `
  constructor() { }

  ngOnInit() {
  }

}

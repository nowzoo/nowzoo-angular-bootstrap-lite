import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-api-show',
  templateUrl: './modal-api-show.component.html',
  styles: []
})
export class ModalApiShowComponent implements OnInit {

  snip = `
<button (click)="modalInstance.show()" class="btn btn-primary">
  Show Modal
</button>
  `;

  code = `
<p>
  <button (click)="modalInstance.show()" class="btn btn-primary">
    Show Modal
  </button>
</p>

<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Show Modal Demo</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
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
            data-dismiss="modal">Close</button>
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

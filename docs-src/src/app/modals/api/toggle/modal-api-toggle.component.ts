import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-api-toggle',
  templateUrl: './modal-api-toggle.component.html',
  styles: []
})
export class ModalApiToggleComponent implements OnInit {

  snip = `
<button (click)="modalInstance.toggle()" class="btn btn-primary">
  Toggle Modal
</button>
  `;

  code = `
<p>
  <button (click)="modalInstance.toggle()" class="btn btn-primary">
    Toggle Modal
  </button>
</p>

<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Toggle Modal Demo</h5>
          <button type="button" class="close"
            (click)="modalInstance.toggle()" aria-label="Close">
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
            (click)="modalInstance.toggle()">Toggle Modal</button>
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
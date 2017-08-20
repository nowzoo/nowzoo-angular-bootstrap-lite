import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-demo-quickstart',
  template: `
  <p class="text-center">
    <button class="btn btn-primary" (click)="modalInstance.show()">
      Show Modal
    </button>
  </p>
  <!-- the modal template -->
  <ng-template nzbModal #modalInstance="nzbModal">
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Quick Start Modal</h5>
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
})
export class ModalDemoQuickstartComponent {}

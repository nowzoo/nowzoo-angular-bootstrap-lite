import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-quickstart',
  templateUrl: './modal-quickstart.component.html'
})
export class ModalQuickstartComponent {

  snippet = `
<!-- template tag -->
<ng-template nzbModal #modalInstance="nzbModal">
  <!-- Bootstrap modal markup -->
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="quickstartModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      ...
    </div>
  </div>
</ng-template>
<!-- the button -->
<p>
  <button class="btn btn-primary" (click)="modalInstance.show()">
    Show Modal
  </button>
</p>
  `;
  code = `
<!-- template tag -->
<ng-template nzbModal #modalInstance="nzbModal">
  <!-- Bootstrap modal markup -->
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="quickstartModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="quickstartModalLabel">Modal Title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Hello world!
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end Bootstrap modal markup -->
</ng-template>

<!-- the button -->
<p>
  <button class="btn btn-primary" (click)="modalInstance.show()">
    Show Modal
  </button>
</p>
  `;

}

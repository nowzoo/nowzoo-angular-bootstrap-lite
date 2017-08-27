import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-api-hide',
  templateUrl: './modal-api-hide.component.html',
  styles: []
})
export class ModalApiHideComponent  {

  snip = `
...
<div class="modal-footer">
  <!-- data-dismiss -->
  <button
    type="button" class="btn btn-secondary"
    data-dismiss="modal">Cancel</button>
  <!-- hide() -->
  <button
    type="button" class="btn btn-success"
    (click)="modalInstance.hide()">Save</button>
</div>
...
  `;

  code = `
<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Hide Demo</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            Click "Save" to use
            <code>modalInstance.hide()</code> to close the modal.

          </p>
          <p class="text-muted">
            In the real world you would  do something
            first, like actually saving the input, before calling <code>hide()</code>.
          </p>
          <p>
            The "Cancel" button uses <code>data-dismiss="modal"</code>
            to close the modal.
          </p>
        </div>
        <div class="modal-footer">
          <!-- if the user clicks cancel, just modalInstance.hide() -->
          <button
            type="button" class="btn btn-secondary"
            data-dismiss="modal">Cancel</button>
          <!-- if the user clicks save, save() -->
          <button
            type="button" class="btn btn-success"
            (click)="modalInstance.hide()">Save</button>
        </div>
      </div>
    </div>
  </div>
</ng-template>

<p>
  <button class="btn btn-primary" (click)="modalInstance.show()">
    Show Modal
  </button>
</p>
  `;

}

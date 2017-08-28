import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-api-status',
  templateUrl: './modal-api-status.component.html',
  styles: []
})
export class ModalApiStatusComponent implements OnInit {

  snip = `
<strong>Status:</strong>
{{modalInstance.status | async}}
  `;


  html = `
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

  `;
  constructor() { }

  ngOnInit() {
  }

}
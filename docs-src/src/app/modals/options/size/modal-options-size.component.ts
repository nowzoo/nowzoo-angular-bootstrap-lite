import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-options-size',
  templateUrl: './modal-options-size.component.html',
  styles: []
})
export class ModalOptionsSizeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  snip = `
<ng-template nzbModal #lgInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <!-- note .modal-dialog.modal-lg -->
    <div class="modal-dialog modal-lg" role="document">...</div>
  </div>
</ng-template>
  `

  html = `
<!-- DEFAULT -->
<ng-template nzbModal #defaultInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <!-- note no .modal-sm or .modal-lg -->
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Default Modal</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            I am the default size.
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

<!-- SMALL -->
<ng-template nzbModal #smInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <!-- note .modal-dialog.modal-sm -->
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Small Modal</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            I am a smaller modal.
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

<!-- LARGE -->
<ng-template nzbModal #lgInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <!-- note .modal-dialog.modal-lg -->
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Large Modal</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            I am a larger modal.
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
<p>
  <button class="btn btn-primary" (click)="defaultInstance.show()">
    Default Size
  </button>
</p>
<p>
  <button class="btn btn-primary" (click)="smInstance.show()">
    Small Modal
  </button>
</p>
<p>
  <button class="btn btn-primary" (click)="lgInstance.show()">
    Large Modal
  </button>
</p>

  `

}
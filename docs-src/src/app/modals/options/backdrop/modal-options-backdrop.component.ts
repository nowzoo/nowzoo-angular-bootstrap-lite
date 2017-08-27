import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-options-backdrop',
  templateUrl: './modal-options-backdrop.component.html',
  styles: []
})
export class ModalOptionsBackdropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  snip = `
  <!-- DEFAULT BACKDROP -->
  <ng-template nzbModal #defaultBackdropInstance="nzbModal">
    <!-- note data-backdrop="true" -->
    <!-- same as omitting data-backdrop altogether -->
    <div class="modal fade" data-backdrop="true" tabindex="-1">...</div>
  </ng-template>
  <!-- NO BACKDROP -->
  <ng-template nzbModal #noBackdropInstance="nzbModal">
    <!-- note data-backdrop="false" -->
    <div class="modal fade" data-backdrop="false" tabindex="-1">...</div>
  </ng-template>
  <!-- STATIC BACKDROP -->
  <ng-template nzbModal #staticBackdropInstance="nzbModal">
    <!-- note data-backdrop="static" -->
    <div class="modal fade" data-backdrop="static" tabindex="-1">...</div>
  </ng-template>
  `

  html = `
<!-- DEFAULT BACKDROP -->
<ng-template nzbModal #defaultBackdropInstance="nzbModal">
  <!-- note data-backdrop="true" -->
  <!-- same as omitting data-backdrop altogether -->
  <div class="modal fade" data-backdrop="true" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            I have a backdrop.
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

<!-- NO BACKDROP -->
<ng-template nzbModal #noBackdropInstance="nzbModal">
  <!-- note data-backdrop="false" -->
  <div class="modal fade" data-backdrop="false" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            I have no backdrop.
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


<!-- STATIC BACKDROP -->
<ng-template nzbModal #staticBackdropInstance="nzbModal">
  <!-- note data-backdrop="static" -->
  <div class="modal fade" data-backdrop="static" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            I have a static backdrop. Clicking on it does not dismiss me.
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
  <button class="btn btn-primary" (click)="defaultBackdropInstance.show()">
     Modal w/ Backdrop
  </button>
</p>
<p>
  <button class="btn btn-primary" (click)="noBackdropInstance.show()">
     Modal w/o Backdrop
  </button>
</p>
<p>
  <button class="btn btn-primary" (click)="staticBackdropInstance.show()">
    Modal w/ Static Backdrop
  </button>
</p>

  `

}

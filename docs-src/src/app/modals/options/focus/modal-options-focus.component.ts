import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-options-focus',
  templateUrl: './modal-options-focus.component.html',
  styles: []
})
export class ModalOptionsFocusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  snip = `
<!-- DEFAULT: data-focus="true" -->
<ng-template nzbModal #focusInstance="nzbModal">
  <!-- data-focus="true" or omit data-focus attr -->
  <div class="modal fade" tabindex="-1" data-focus="true">...</div>
</ng-template>
<!-- Disable focus -->
<ng-template nzbModal #noFocusInstance="nzbModal">
  <!-- note data-focus="false" -->
  <div class="modal fade" data-focus="false" tabindex="-1" >...</div>
</ng-template>

  `;
  html = `
<!-- DEFAULT: data-focus="true" -->
<ng-template nzbModal #focusInstance="nzbModal">
  <!-- data-focus="true" or omit data-focus attr -->
  <div class="modal fade" tabindex="-1" data-focus="true">
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
          <p class="show-if-modal-focused">
            The modal has focus.
          </p>
          <p class="show-if-modal-not-focused">
            The modal does not have focus.
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

<!-- Disable focus -->
<ng-template nzbModal #noFocusInstance="nzbModal">
  <!-- note data-focus="false" -->
  <div class="modal fade" data-focus="false" tabindex="-1" >
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
          <p class="show-if-modal-focused">
            The modal has focus.
          </p>
          <p class="show-if-modal-not-focused">
            The modal does not have focus.
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
  <button class="btn btn-primary" (click)="focusInstance.show()">
    Modal w/ Focus (Default)
  </button>
</p>
<p>
  <button class="btn btn-primary" (click)="noFocusInstance.show()">
     Modal w/o Focus
  </button>
</p>`;
  scss = `
.modal {
  .show-if-modal-focused{
    display: none;
  }
  .show-if-modal-not-focused{
    display: block;
  }
  &:focus {
    .show-if-modal-focused{
      display: block;
    }
    .show-if-modal-not-focused{
      display: none;
    }
  }
}
  `
}

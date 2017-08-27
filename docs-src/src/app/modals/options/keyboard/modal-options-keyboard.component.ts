import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-options-keyboard',
  templateUrl: './modal-options-keyboard.component.html',
  styles: []
})
export class ModalOptionsKeyboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  snip = `
<!-- DEFAULT -->
<ng-template nzbModal #keyboardInstance="nzbModal">
  <!-- data-keyboard="true" or omit data-keyboard attr -->
  <div class="modal fade" data-keyboard="true" tabindex="-1">...</div>
</ng-template>
<!-- DISABLE KEYBOARD -->
<ng-template nzbModal #noKeyboardInstance="nzbModal">
  <!-- note data-keyboard="false" -->
  <div class="modal fade" data-keyboard="false" tabindex="-1">...</div>
</ng-template>
`
  html = `
<!-- DEFAULT -->
<ng-template nzbModal #keyboardInstance="nzbModal">
  <!-- data-keyboard="true" or omit data-keyboard attr -->
  <div class="modal fade" data-keyboard="true" tabindex="-1">
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
            Hitting the <code>esc</code> key will dismiss me.
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

<!-- DISABLE KEYBOARD -->
<ng-template nzbModal #noKeyboardInstance="nzbModal">
  <!-- note data-keyboard="false" -->
  <div class="modal fade" data-keyboard="false" tabindex="-1">
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
            Hitting the <code>esc</code> key will not dismiss me.
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
  <button class="btn btn-primary" (click)="keyboardInstance.show()">
     Default - data-keyboard="true"
  </button>
</p>

<p>
  <button class="btn btn-primary" (click)="noKeyboardInstance.show()">
     Modal - data-keyboard="false"
  </button>
</p>
`
}

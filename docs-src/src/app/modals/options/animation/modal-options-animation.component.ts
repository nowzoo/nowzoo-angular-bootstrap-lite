import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-options-animation',
  templateUrl: './modal-options-animation.component.html',
  styles: []
})
export class ModalOptionsAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  snip = `
<!-- animation ON -->
<ng-template nzbModal #animatedInstance="nzbModal">
  <!-- note .fade class -->
  <div class="modal fade" tabindex="-1">...</div>
</ng-template>
<!-- animation OFF -->
<ng-template nzbModal #inanimateInstance="nzbModal">
  <!-- note absence of .fade class -->
  <div class="modal" tabindex="-1">...</div>
</ng-template>
  `

  html = `
<!-- animation ON -->
<ng-template nzbModal #animatedInstance="nzbModal">
  <!-- note .fade class -->
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Animated Modal</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            I am animated.
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

<!-- animation OFF -->
<ng-template nzbModal #inanimateInstance="nzbModal">
  <!-- note absence of .fade class -->
  <div class="modal" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Inanimate Modal</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            I am not animated.
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
  <button class="btn btn-primary" (click)="animatedInstance.show()">
    Animated Modal
  </button>
</p>
<p>
  <button class="btn btn-primary" (click)="inanimateInstance.show()">
    Inanimate Modal
  </button>
</p>
  `

}
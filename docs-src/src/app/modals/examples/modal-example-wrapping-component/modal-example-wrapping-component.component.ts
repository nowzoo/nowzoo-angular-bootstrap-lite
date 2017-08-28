import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-example-wrapping-component',
  templateUrl: './modal-example-wrapping-component.component.html',
  styles: []
})
export class ModalExampleWrappingComponentComponent {

  constructor() { }

  snipHtml = `
...
<div class="modal-body">
  <app-modal-example-wrapped-component-demo
    confirmMessage="Yes, I have read and memorized the Terms of Service."
    (onConfirmed)="setConfirmed($event)"></app-modal-example-wrapped-component-demo>
</div>
...
  `

  tsModal = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-example-wrapping-component-demo',
  templateUrl: './modal-example-wrapping-component-demo.component.html'
})
export class ModalExampleWrappingComponentDemoComponent {
  confirmed: boolean = false;
  setConfirmed(b) {
    this.confirmed = b;
  }
}

  `;

  htmlModal = `
<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Please Confirm</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <app-modal-example-wrapped-component-demo
            confirmMessage="Yes, I have read and memorized the Terms of Service."
            (onConfirmed)="setConfirmed($event)"></app-modal-example-wrapped-component-demo>
        </div>
        <div class="modal-footer">

          <button
            type="button" class="btn btn-success"
            [disabled]="confirmed !== true"
            data-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>
</ng-template>

<p *ngIf="confirmed">
  You have confirmed that you have read and memorized the Terms of Service.

</p>
<p *ngIf="!confirmed">
  You have not yet confirmed that you have read and memorized the Terms of Service.
</p>
<p>
  <!-- the button -->
  <button class="btn btn-primary" (click)="modalInstance.show()" [disabled]="confirmed === true">
    Confirm
  </button>
  <button class="btn btn-secondary" *ngIf="confirmed" (click)="setConfirmed(false)">Reset</button>
</p>

  `

  tsWrapped = `
import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal-example-wrapped-component-demo',
  templateUrl: './modal-example-wrapped-component-demo.component.html',
  styles: []
})
export class ModalExampleWrappedComponentDemoComponent {
  @Input() confirmMessage: string;
  @Output() onConfirmed: EventEmitter<boolean> = new EventEmitter();
  confirmed: boolean = false;
}
  `

  htmlWrapped = `
<div class="form-check">
  <label class="form-check-label">
    <input
      class="form-check-input"
      type="checkbox"
      (change)="onConfirmed.next(confirmed)"
      [value]="true"
      [(ngModel)]="confirmed">
    {{confirmMessage}}
  </label>
</div>
  `

}

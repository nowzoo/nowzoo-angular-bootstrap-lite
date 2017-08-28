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

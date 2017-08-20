import { Component, ViewChild } from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-modal-demo-show',
  templateUrl: './modal-demo-show.component.html'
})
export class ModalDemoShowComponent {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;
  constructor() { }

  hiddenMessage: string = null;
  showModal() {
    this.hiddenMessage = null;
    this.modalInstance.show().then(() => {
      this.hiddenMessage = 'Modal hidden!'
    })
  }
}

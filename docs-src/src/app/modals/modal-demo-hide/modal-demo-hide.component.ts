import { Component, ViewChild } from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-modal-demo-hide',
  templateUrl: './modal-demo-hide.component.html',
})
export class ModalDemoHideComponent  {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;

  entered: string = '';
  saved: string = 'Dublin the dog';

  constructor() { }

  showModal() {
    this.entered = this.saved;
    this.modalInstance.show();
  }

  save() {
    this.saved = this.entered;
    this.modalInstance.hide();
  }

}

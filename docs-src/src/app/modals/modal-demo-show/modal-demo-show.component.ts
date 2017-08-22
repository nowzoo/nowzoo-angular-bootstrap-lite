import { Component, ViewChild } from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-modal-demo-show',
  templateUrl: './modal-demo-show.component.html'
})
export class ModalDemoShowComponent {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;

  showTheModal(){
    this.modalInstance.show();
  }
}

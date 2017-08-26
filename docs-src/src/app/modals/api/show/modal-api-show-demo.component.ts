import { Component, ViewChild } from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-modal-api-show-demo',
  templateUrl: './modal-api-show-demo.component.html'
})
export class ModalApiShowDemoComponent {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;
  showTheModal(){
    this.modalInstance.show();
  }
}

import { Component, ViewChild } from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';

const para: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';

@Component({
  selector: 'app-modal-api-handle-update-demo',
  templateUrl: './modal-api-handle-update-demo.component.html',
  styles: []
})
export class ModalApiHandleUpdateDemoComponent {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;
  paragraphs: string[] = [para];
  increase() {
    this.paragraphs.push(para);
    this.modalInstance.handleUpdate();

  }
  decrease() {
    this.paragraphs.pop();
    this.modalInstance.handleUpdate();
  }
}

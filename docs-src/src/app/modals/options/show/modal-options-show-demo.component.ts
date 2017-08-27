import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-modal-options-show-demo',
  templateUrl: './modal-options-show-demo.component.html'
})
export class ModalOptionsShowDemoComponent implements AfterViewInit {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;
  ngAfterViewInit() {
    setTimeout(() => {
      this.modalInstance.show();
    })
  }
}

import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-modal-demo-show-on-instantiation-child',
  templateUrl: './modal-demo-show-on-instantiation-child.component.html'
})
export class ModalDemoShowOnInstantiationChildComponent implements AfterViewInit {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;

  ngAfterViewInit() {
    this.modalInstance.show();
  }

}

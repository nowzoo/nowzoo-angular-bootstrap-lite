import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-demo-show-on-instantiation',
  templateUrl: './modal-demo-show-on-instantiation.component.html',
})
export class ModalDemoShowOnInstantiationComponent {
  childInstantiated: boolean = false;
}

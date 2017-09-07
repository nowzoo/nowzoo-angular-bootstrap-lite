import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';

@Component({
  selector: 'app-modal-opened-immediately',
  templateUrl: './modal-opened-immediately.component.html',
  styleUrls: ['./modal-opened-immediately.component.scss']
})
export class ModalOpenedImmediatelyComponent implements AfterViewInit {
  @ViewChild('modal1') modal1: NzbModalDirective;
  constructor() { }

  ngAfterViewInit() {
    this.modal1.show();
  }

}

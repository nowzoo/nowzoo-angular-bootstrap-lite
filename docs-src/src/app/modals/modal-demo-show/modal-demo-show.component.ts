import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-demo-show',
  templateUrl: './modal-demo-show.component.html'
})
export class ModalDemoShowComponent implements AfterViewInit {
  @ViewChild('exampleModal') exampleModal;

  example = `export class ModalDemoShowComponent implements AfterViewInit {
  @ViewChild('exampleModal') exampleModal;
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.exampleModal.show();
    })
  }
}
  `
  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.exampleModal.show();
    })
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-demo-promises',
  templateUrl: './modal-demo-promises.component.html',
  styleUrls: ['./modal-demo-promises.component.css']
})
export class ModalDemoPromisesComponent implements OnInit {
  @ViewChild('exampleModal') exampleModal;
  example = `export class ModalDemoPromisesComponent implements OnInit {
  @ViewChild('exampleModal') exampleModal;
  message: string = null;
  showModal() {
    this.message = null;
    this.exampleModal.shown().then(() => {
      this.message = 'Modal completely shown';
    });
    this.exampleModal.hidden().then(() => {
      this.message = 'Modal completely hidden';
    });
    this.exampleModal.show();
  }

}

  `;

  message: string = null;

  constructor() { }

  ngOnInit() {
  }

  showModal() {
    this.message = null;
    this.exampleModal.shown().then(() => {
      this.message = 'Modal completely shown!';
      setTimeout(() => this.message = null, 1500);
    });
    this.exampleModal.hidden().then(() => {
      this.message = 'Modal completely hidden!';
      setTimeout(() => this.message = null, 1500);
    });
    this.exampleModal.show();
  }

}

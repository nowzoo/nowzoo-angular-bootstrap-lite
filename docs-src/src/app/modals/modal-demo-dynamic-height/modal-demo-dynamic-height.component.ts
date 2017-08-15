import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-demo-dynamic-height',
  templateUrl: './modal-demo-dynamic-height.component.html',
  styleUrls: ['./modal-demo-dynamic-height.component.css']
})
export class ModalDemoDynamicHeightComponent implements OnInit {
  @ViewChild('exampleModal') exampleModal;
  p = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  example = `export class ModalDemoDynamicHeightComponent implements OnInit {
    @ViewChild('exampleModal') exampleModal;
    p = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    paragraphs: string[] = [];

    constructor() { }

    ngOnInit() {
      this.paragraphs.push(this.p);
    }

    add() {
      this.paragraphs.push(this.p);
      this.exampleModal.handleUpdate()
    }

    subtract() {
      this.paragraphs.pop();
      this.exampleModal.handleUpdate()
    }

  }`
  paragraphs: string[] = [];

  constructor() { }

  ngOnInit() {
    this.paragraphs.push(this.p);
  }

  add() {
    this.paragraphs.push(this.p);
    this.exampleModal.handleUpdate()
  }

  subtract() {
    this.paragraphs.pop();
    this.exampleModal.handleUpdate()
  }

}

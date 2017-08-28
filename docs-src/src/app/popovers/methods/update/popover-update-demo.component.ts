import { Component, ViewChild } from '@angular/core';
import { NzbPopoverDirective } from 'nowzoo-angular-bootstrap-lite';
const  para = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';

@Component({
  selector: 'app-popover-update-demo',
  templateUrl: './popover-update-demo.component.html'
})
export class PopoverUpdateDemoComponent {
  @ViewChild('popoverInstance') popoverInstance: NzbPopoverDirective;
  paras = [para];
  push() {
    this.paras.push(para);
    this.popoverInstance.update();
  }
  pop() {
    this.paras.pop();
    this.popoverInstance.update();
  }
}

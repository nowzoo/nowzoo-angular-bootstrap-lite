import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-update',
  templateUrl: './popover-update.component.html',
  styles: []
})
export class PopoverUpdateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ts = `
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
`
  html = `
<p>
  <button class="btn btn-outline-info"
    nzbPopover
    #popoverInstance="nzbPopover"
    title="update() Demo"
    data-placement="top"
    [nzbPopoverContent]="contentTemplate">update() Demo</button>
</p>
<ng-template #contentTemplate>
  <p>
    <button class="btn btn-secondary btn-sm"
    [disabled]="paras.length===0"
    (click)="pop()">less</button>
    <button class="btn btn-secondary btn-sm"
    [disabled]="paras.length===3"
    (click)="push()">more</button>
  </p>
  <p *ngFor="let para of paras">{{para}}</p>
</ng-template>
  `

}

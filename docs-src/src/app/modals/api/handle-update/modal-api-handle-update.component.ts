import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-api-handle-update',
  templateUrl: './modal-api-handle-update.component.html',
  styles: []
})
export class ModalApiHandleUpdateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  htmlCode = `
<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">handleUpdate() Example</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            <button class="btn btn-secondary btn-sm" (click)="decrease()">
              Decrease Content
            </button>
            <button class="btn btn-secondary btn-sm" (click)="increase()">
              Increase Content
            </button>
          </p>
          <hr>
          <p *ngFor="let p of paragraphs">{{p}}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button" class="btn btn-secondary"
            data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</ng-template>
<p>
  <button class="btn btn-primary" (click)="modalInstance.show()">
    Show Modal
  </button>
</p>
  `;

  tsCode = `
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
  `;
  snip = `
export class ModalApiHandleUpdateDemoComponent {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;
  paragraphs: string[] = [para];
  increase() {
    this.paragraphs.push(para);
    this.modalInstance.handleUpdate();
  }
}
  `;

}

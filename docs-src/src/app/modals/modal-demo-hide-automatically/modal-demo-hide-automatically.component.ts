import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-hide-automatically-demo',
  templateUrl: './modal-demo-hide-automatically.component.html',
})
export class ModalDemoHideAutomaticallyComponent implements OnInit {


  example = `<button class="btn btn-primary" (click)="exampleModal.show()">Show Modal</button>
<ng-template nzbModal #exampleModal="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Make Me Go Away</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>
            <a routerLink="/modals">Click here</a> to
            navigate to another page.  This modal will
            go away gracefully.
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</ng-template>`
  constructor() { }

  ngOnInit() {
  }

}

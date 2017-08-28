import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-example-go-away',
  templateUrl: './modal-example-go-away.component.html',
  styles: []
})
export class ModalExampleGoAwayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  html = `

<!-- the modal template -->
<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal Goes Away Nicely</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>

            <a routerLink="/modals/go-away">Click here</a>
            to trigger a route change. This modal will disappear
            gracefully when its template is destroyed.
          </p>
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
  <!-- the button -->
  <button class="btn btn-primary" (click)="modalInstance.show()">
    Show Modal
  </button>
</p>
  `

}
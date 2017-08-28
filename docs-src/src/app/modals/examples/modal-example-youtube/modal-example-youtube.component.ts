import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-example-youtube',
  templateUrl: './modal-example-youtube.component.html',
  styles: []
})
export class ModalExampleYoutubeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  html = `



<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">YouTube</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item"
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</ng-template>

<p>
  <!-- the button -->
  <button class="btn btn-primary" (click)="modalInstance.show()">
    YouTube Video
  </button>
</p>`;

  snip = `
<div class="modal-body">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item"
    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
  </div>
</div>
  `

}

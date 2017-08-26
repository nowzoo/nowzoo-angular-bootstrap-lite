import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const jQuery: any;
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  gistFiles: any = {};
  gistId: string = 'cdcarson/9a7fa3f1128dff5f353edf209ed07e35';

  quicstartFullCode = `
<!-- template tag -->
<ng-template nzbModal #modalInstance="nzbModal">
  <!-- Bootstrap modal markup -->
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="quickstartModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="quickstartModalLabel">Quickstart Modal</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Hello World
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end Bootstrap modal markup -->
</ng-template>

<!-- the button -->
<p>
  <button class="btn btn-primary" (click)="modalInstance.show()">
    Show Modal
  </button>
</p>
  `
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }

}

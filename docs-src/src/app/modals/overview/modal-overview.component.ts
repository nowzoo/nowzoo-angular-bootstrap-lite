import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-overview',
  templateUrl: './modal-overview.component.html',
  styles: []
})
export class ModalOverviewComponent {

  snippet1 = `
<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <!-- omitted for clarity -->
  </div>
</ng-template>
  `;
  snippet2 = `
<button (click)="modalInstance.show()">
  Show Modal
</button>`

  snippet3= `
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-some',
  templateUrl: './some.component.html'
})
export class SomeComponent implements AfterViewInit {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;
  ngAfterViewInit() {
    console.log(this.modalInstance);
  }
}`;

  snippet4= `<!-- animation off,  backdrop static, size small -->
<ng-template nzbModal #inanimateInstance="nzbModal">
  <!-- note no .fade class -->
  <div class="modal" tabindex="-1" data-backdrop="static">
     <!-- note .modal-sm class -->
    <div class="modal-dialog modal-sm" role="document">
       <!-- omitted for clarity -->
    </div>
  </div>
 </ng-template>`;

}

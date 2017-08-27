import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-api',
  templateUrl: './modal-api.component.html',
  styles: []
})
export class ModalApiComponent {
  showSnip1 = `<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade"> ... </div>
</ng-template>
<button class="btn btn-primary" (click)="modalInstance.show()">
  Show Modal
</button>`;

hideSnipHtml = `<!-- some.component.html -->
<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">...</div>
        <div class="modal-body">... collect some input here ...</div>
        <div class="modal-footer">
          <!-- if the user clicks cancel, just hide() -->
          <!-- you could use data-dismiss="modal" instead -->
          <button type="button" class="btn btn-secondary"
            (click)="modalInstance.hide()">Cancel</button>
          <!-- if the user clicks save, save(), then hide() -->
          <button type="button" class="btn btn-success"
            (click)="save()">Save</button>
        </div>
      </div>
    </div>
  </div>
</ng-template>
`;
hideSnipTs=`// some.component.ts
import { Component, ViewChild } from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
})
export class SomeComponent  {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;
  save() {
    // do whatever you need to do, then...
    this.modalInstance.hide();
  }
}`

handleUpdateSnipTs=`// some.component.ts
import { Component, ViewChild } from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
})
export class SomeComponent  {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;
  constructor( private tolstoyService: TolstoyService ) {}
  ngAfterViewInit() {
    
  }
}`




}

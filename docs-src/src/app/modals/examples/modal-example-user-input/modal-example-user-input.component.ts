import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-example-user-input',
  templateUrl: './modal-example-user-input.component.html',
  styles: []
})
export class ModalExampleUserInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  html = `
<ng-template nzbModal #modalInstance="nzbModal">
  <div class="modal fade" tabindex="-1" (focus)="nameInput.focus(); nameInput.select()">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Enter Your Name</h5>
          <button type="button" class="close"
            data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="example-user-input-name">Name</label>
            <input
              #nameInput
              type="text"
              id="example-user-input-name"
              class="form-control"
              [(ngModel)]="inputName"
              (keyup.enter)="save()">
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button" class="btn btn-secondary"
            data-dismiss="modal">Cancel</button>
          <button
            type="button" class="btn btn-success"
            (click)="save()">Save</button>
        </div>
      </div>
    </div>
  </div>
</ng-template>

<p>
  <!-- the button -->
  <button class="btn btn-primary" (click)="modalInstance.show()">
    Enter Name...
  </button>
</p>

<p>
  <strong>Currently Saved:</strong> {{savedName}}
</p>
  `

  ts = `
import { Component, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import { NzbModalDirective } from 'nowzoo-angular-bootstrap-lite';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-modal-example-user-input-demo',
  templateUrl: './modal-example-user-input-demo.component.html',
  styles: []
})
export class ModalExampleUserInputDemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('modalInstance') modalInstance: NzbModalDirective;
  private sub: Subscription;
  inputName: string;
  savedName: string = 'World';


  ngAfterViewInit() {
    setTimeout(() =>{
      this.sub = this.modalInstance.events.subscribe((event: Event) => {
        switch(event.type) {
          case 'show':
            this.inputName = this.savedName;
            break;

        }
      })
    })

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save(){
    this.savedName = this.inputName;
    this.modalInstance.hide();
  }
}

  `

  snipHtmlKeyupEnter = `
  <input
    #nameInput
    type="text"
    id="example-user-input-name"
    class="form-control"
    [(ngModel)]="inputName"
    (keyup.enter)="save()">
  `;
  snipHtmlFocus = `
...
<div class="modal fade" tabindex="-1"
  (focus)="nameInput.focus(); nameInput.select()">
...

  `

}

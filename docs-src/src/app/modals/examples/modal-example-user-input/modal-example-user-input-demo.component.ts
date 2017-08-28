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

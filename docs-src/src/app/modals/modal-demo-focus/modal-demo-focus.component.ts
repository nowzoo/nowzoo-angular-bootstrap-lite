import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modal-demo-focus',
  templateUrl: './modal-demo-focus.component.html',
  styleUrls: ['./modal-demo-focus.component.css']
})
export class ModalDemoFocusComponent implements OnInit {

  lastModalFocused: string = null;


  example = `<!-- Default Behavior -->
<button class="btn btn-primary" (click)="defaultModal.show()">Default Behavior</button>
<ng-template nzbModal #defaultModal="nzbModal">
  <!-- same as data-focus="true" -->
  <div class="modal fade" tabindex="-1">...</div>
</ng-template>

<!-- Behavior Disabled -->
<button class="btn btn-primary" (click)="noFocusModal.show()">Focus = false</button>
<ng-template nzbModal #noFocusModal="nzbModal">
  <div class="modal fade" tabindex="-1" data-focus="false">...</div>
</ng-template>
`

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.listen(document.body, 'focusin', (event) => {
      if(event.target.className.indexOf('modal') > -1) {
        this.lastModalFocused = event.target.id;
        setTimeout(() => {
          this.lastModalFocused = null;
        }, 2000)
      }
    })
  }

}

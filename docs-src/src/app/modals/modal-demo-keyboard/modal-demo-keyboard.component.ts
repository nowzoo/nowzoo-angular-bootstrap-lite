import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-demo-keyboard',
  templateUrl: './modal-demo-keyboard.component.html',
  styleUrls: ['./modal-demo-keyboard.component.css']
})
export class ModalDemoKeyboardComponent implements OnInit {

  example = `<!-- Default Behavior -->
<button class="btn btn-primary" (click)="defaultModal.show()">Default Behavior</button>
<ng-template nzbModal #defaultModal="nzbModal">
  <!-- same as data-keyboard="true" -->
  <div class="modal fade" tabindex="-1">...</div>
</ng-template>

<!-- Behavior Disabled -->
<button class="btn btn-primary" (click)="noEscModal.show()">Keyboard = false</button>
<ng-template nzbModal #noEscModal="nzbModal">
  <div class="modal fade" tabindex="-1" data-keyboard="false">...</div>
</ng-template>`
  constructor() { }

  ngOnInit() {
  }

}

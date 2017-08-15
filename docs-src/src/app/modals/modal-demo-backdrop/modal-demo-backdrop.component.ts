import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-demo-backdrop',
  templateUrl: './modal-demo-backdrop.component.html',
  styleUrls: ['./modal-demo-backdrop.component.css']
})
export class ModalDemoBackdropComponent implements OnInit {

  example = `<!-- Default -->
<button class="btn btn-primary" (click)="defaultModal.show()">Modal With Backdrop</button>
<ng-template nzbModal #defaultModal="nzbModal">
  <!-- No attribute necessary -- same as data-backdrop="true" -->
  <div class="modal fade" tabindex="-1">...</div>
</ng-template>

<!-- No Backdrop -->
<button class="btn btn-primary" (click)="noBackdropModal.show()">Modal Without Backdrop</button>
 <ng-template nzbModal #noBackdropModal="nzbModal">
  <div class="modal fade" tabindex="-1" data-backdrop="false">...</div>
</ng-template>

<!-- Static Backdrop -->
<button class="btn btn-primary" (click)="staticBackdropModal.show()">Modal With Static Backdrop</button>
<ng-template nzbModal #staticBackdropModal="nzbModal">
  <div class="modal fade" tabindex="-1" data-backdrop="static">...</div>
</ng-template>
  `;

  
  constructor() { }

  ngOnInit() {
  }

}

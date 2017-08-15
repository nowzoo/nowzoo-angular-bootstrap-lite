import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-demo-animation',
  templateUrl: './modal-demo-animation.component.html',
  styleUrls: ['./modal-demo-animation.component.css']
})
export class ModalDemoAnimationComponent implements OnInit {

  example = `<!-- Animated Modal -->
<button class="btn btn-primary" (click)="animateModal.show()">Modal With Animation</button>
<ng-template nzbModal #animateModal="nzbModal">
  <!-- NOTE .fade class -->
  <div class="modal fade" tabindex="-1">...</div>
</ng-template>

<!-- Animation Disabled -->
<button class="btn btn-primary" (click)="inanimateModal.show()">Modal Without Animation</button>
<ng-template nzbModal #inanimateModal="nzbModal">
  <!-- NOTE  absence of .fade class -->
  <div class="modal" tabindex="-1">...</div>
</ng-template>
  `

  constructor() { }

  ngOnInit() {
  }

}

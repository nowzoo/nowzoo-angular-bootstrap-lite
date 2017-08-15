import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-demo-size',
  templateUrl: './modal-demo-size.component.html',
  styleUrls: ['./modal-demo-size.component.css']
})
export class ModalDemoSizeComponent implements OnInit {

  example = `<!-- Small Modal -->
<button class="btn btn-primary" (click)="smallModal.show()">Small Modal</button>
<ng-template nzbModal #smallModal="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-sm" role="document">
      ....
    </div>
  </div>
</ng-template>

<!-- Large Modal -->
<button class="btn btn-primary" (click)="largeModal.show()">Large Modal</button>
<ng-template nzbModal #largeModal="nzbModal">
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-lg" role="document">
      ...
    </div>
  </div>
</ng-template>
`

  constructor() { }

  ngOnInit() {
  }

}

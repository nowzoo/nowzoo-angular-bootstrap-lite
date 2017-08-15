import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-demo-fixed',
  templateUrl: './modal-demo-fixed.component.html',
  styleUrls: ['./modal-demo-fixed.component.css']
})
export class ModalDemoFixedComponent implements OnInit {

  public date: Date;
  private interval;

  cssExample = `.fixed-container{
  position: fixed;
  left: 10px;
  bottom: 10px;
  height: 150px;
  width: 250px;
  overflow: scroll;
  border: 10px solid #FC3;
  padding: 20px;
}
  
`;
  example = `<div class="fixed-container">
  <p class="text-muted">This is a fixed container.</p>
  <p>
    <button class="btn btn-primary" (click)="exampleModal1.show()">Show Modal</button>
  </p>

  <ng-template nzbModal #exampleModal1="nzbModal">
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Time from containing component:
              {{date.toLocaleTimeString()}}
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </ng-template>

</div>
`

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000)
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

}

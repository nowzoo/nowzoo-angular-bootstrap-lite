import {
  Component,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NzbTooltipDirective } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('tooltip2') tooltip2: NzbTooltipDirective;
  shownFor: number = 0;
  private tooltip2Sub: Subscription;
  private interval: any;
  constructor(
  ) { }

  ngAfterViewInit() {
    // set up the ng-templates demo...
    this.tooltip2Sub = this.tooltip2.status.subscribe((status: string) => {
      switch(status) {
        case 'show':
          this.shownFor = 0;
          this.interval = setInterval(() =>{
            this.shownFor++;
          }, 1000);
          break;
        case 'hidden':
          if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
          }
          break;
      }
    });


  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.tooltip2Sub.unsubscribe();
  }

}

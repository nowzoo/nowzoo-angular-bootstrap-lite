import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-popover-fallback-placement',
  templateUrl: './popover-fallback-placement.component.html',
  styleUrls: ['./popover-fallback-placement.component.scss']
})
export class PopoverFallbackPlacementComponent implements OnInit {

  baseId: string;
  gistId = 'cdcarson/0d2e5ca7d1c32172fe09fcd78bd5b644';
  constructor() { }

  ngOnInit() {
    this.baseId = _.uniqueId('app-popover-fallback-placement')
  }

}

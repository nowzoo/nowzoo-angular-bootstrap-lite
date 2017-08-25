import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-popover-container',
  templateUrl: './popover-container.component.html',
  styleUrls: ['./popover-container.component.scss']
})
export class PopoverContainerComponent implements OnInit {

  baseId: string;
  gistId = 'cdcarson/0d2e5ca7d1c32172fe09fcd78bd5b644';
  constructor() { }

  ngOnInit() {
    this.baseId = _.uniqueId('app-popover-container')
  }


}

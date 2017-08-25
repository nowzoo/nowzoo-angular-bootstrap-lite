import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-popover-title',
  templateUrl: './popover-title.component.html',
  styleUrls: ['./popover-title.component.scss']
})
export class PopoverTitleComponent implements OnInit {
  baseId: string;
  gistId = 'cdcarson/0d2e5ca7d1c32172fe09fcd78bd5b644';
  constructor() { }

  ngOnInit() {
    this.baseId = _.uniqueId('app-popover-title');
  }

}

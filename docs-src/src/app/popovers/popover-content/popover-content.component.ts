import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-popover-content',
  templateUrl: './popover-content.component.html',
  styleUrls: ['./popover-content.component.scss']
})
export class PopoverContentComponent implements OnInit {

  baseId: string;
  gistId = 'cdcarson/0d2e5ca7d1c32172fe09fcd78bd5b644';
  constructor() { }

  ngOnInit() {
    this.baseId = _.uniqueId('app-popover-content')
  }

}

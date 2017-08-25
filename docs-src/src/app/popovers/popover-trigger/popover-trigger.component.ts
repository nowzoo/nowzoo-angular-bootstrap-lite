import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-popover-trigger',
  templateUrl: './popover-trigger.component.html',
  styleUrls: ['./popover-trigger.component.scss']
})
export class PopoverTriggerComponent implements OnInit {

  baseId: string;
  gistId = 'cdcarson/0d2e5ca7d1c32172fe09fcd78bd5b644';
  constructor() { }

  ngOnInit() {
    this.baseId = _.uniqueId('app-popover-trigger')
  }

}

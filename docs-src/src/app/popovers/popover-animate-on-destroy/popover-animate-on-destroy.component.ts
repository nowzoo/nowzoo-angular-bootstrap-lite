import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-popover-animate-on-destroy',
  templateUrl: './popover-animate-on-destroy.component.html',
  styleUrls: ['./popover-animate-on-destroy.component.scss']
})
export class PopoverAnimateOnDestroyComponent implements OnInit {

  baseId: string;
  gistId = 'cdcarson/0d2e5ca7d1c32172fe09fcd78bd5b644';
  constructor() { }

  ngOnInit() {
    this.baseId = _.uniqueId('app-popover-animate-on-destroy')
  }

}

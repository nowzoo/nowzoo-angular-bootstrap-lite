import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss']
})
export class SideNavItemComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit() {
  }

}

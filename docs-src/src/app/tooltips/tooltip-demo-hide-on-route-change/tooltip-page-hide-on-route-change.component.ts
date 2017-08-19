import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popover-page-hide-on-route-change',
  templateUrl: './tooltip-page-hide-on-route-change.component.html',
  styleUrls: ['./tooltip-page-hide-on-route-change.component.scss']
})
export class TooltipPageHideOnRouteChangeComponent implements OnInit {


  gistFiles: any = {};

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.gistFiles = this.route.snapshot.data['gistFiles'];
  }
}

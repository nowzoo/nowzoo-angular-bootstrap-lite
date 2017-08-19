import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popover-page-hide-on-route-change',
  templateUrl: './popover-page-hide-on-route-change.component.html',
  styleUrls: ['./popover-page-hide-on-route-change.component.scss']
})
export class PopoverPageHideOnRouteChangeComponent implements OnInit {


  gistFiles: any = {};

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.fragment.subscribe ( f => {
         const element = document.querySelector ( "#" + f )
         if ( element ) element.scrollIntoView ( element )
     });
    this.gistFiles = this.route.snapshot.data['gistFiles'];
  }
}

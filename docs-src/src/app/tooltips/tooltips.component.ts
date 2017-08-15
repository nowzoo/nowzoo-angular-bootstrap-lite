import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.css']
})
export class TooltipsComponent implements OnInit {

  gistId = 'cdcarson/a093f7f69144b5380ac7be766f0bd7ef';

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.fragment.subscribe ( f => {
         const element = document.querySelector ( "#" + f )
         if ( element ) element.scrollIntoView ( element )
     });
  }

  ngOnInit() {
  }

}

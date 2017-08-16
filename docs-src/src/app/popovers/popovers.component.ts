import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.css']
})
export class PopoversComponent implements OnInit {

  gistId = 'cdcarson/5afd85ea5ae5731112130269a4c5772c';

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

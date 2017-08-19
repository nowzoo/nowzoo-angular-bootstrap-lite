import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.css']
})
export class PopoversComponent implements OnInit {

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

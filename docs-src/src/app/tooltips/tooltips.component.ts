import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.css']
})
export class TooltipsComponent implements OnInit {

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

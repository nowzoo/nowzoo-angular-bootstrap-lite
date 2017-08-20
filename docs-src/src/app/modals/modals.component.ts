import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

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

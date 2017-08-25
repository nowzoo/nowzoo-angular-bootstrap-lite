import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.css']
})
export class PopoversComponent implements OnInit {

  gistFiles: any = {};
  gistId = 'cdcarson/0d2e5ca7d1c32172fe09fcd78bd5b644';

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }


}

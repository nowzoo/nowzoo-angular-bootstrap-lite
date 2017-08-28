import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const jQuery: any;
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  gistFiles: any = {};
  gistId: string = 'cdcarson/9a7fa3f1128dff5f353edf209ed07e35';

  constructor(

  ) { }

  ngOnInit(): void {

  }

}

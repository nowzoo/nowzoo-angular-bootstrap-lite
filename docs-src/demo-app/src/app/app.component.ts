import { Component } from '@angular/core';
declare const demo:string;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  demo: string;
  constructor(){}

  ngOnInit() {
    this.demo = demo;
  }
}

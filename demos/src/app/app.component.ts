import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { Router, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/filter'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(
    private router: Router,
    private titleService: Title
  ){}

  ngOnInit() {
    this.router.events.filter((e:any) => e instanceof NavigationEnd).subscribe(e => {
      let cfg: any = this.router.config.find((c: any) => {
        return c.path && c.data && '/' + c.path === this.router.url;
      })
      if (cfg && cfg.data && cfg.data.title) {
        this.titleService.setTitle(cfg.data.title + ' | nzb Demos')
      } else {
        this.titleService.setTitle('nzb Demos')
      }


    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const demo = this.route.snapshot.queryParams.demo;

    if (demo) {
      const valid = this.router.config.find((c: any) => {
        return c.path === demo;
      });
      if (valid) {
        this.router.navigateByUrl('/' + valid.path);
      }
    }
  }

}

# nzb

This library is an Angular 4+ wrapper for  Bootstrap 4 Beta.

<strong>Important: depends on Bootstrap, Tether and slim jQuery.</strong> Rather than recreating Bootstrap components from scratch in native Angular, we use Bootstrap javascript and its dependencies. This is a fundamentally different approach from other Angular/Bootstrap libraries. Namely, it's not "pure" Angular. We've went for a bit of impurity for the sake of a smaller codebase and consistency with Bootstrap.

(Want Angular purity? Look here https://github.com/valor-software/ngx-bootstrap or here https://github.com/ng-bootstrap/ng-bootstrap.)

## Design Goal

Bootstrap works. Angular works. This library attempts to wrap the Bootstrap API as simply and as consistently as possible.

## What's included
 - Modals
 - Popovers
 - Tooltips
 - Tabs (tabs, pills, list groups)
 - Collapse
 - Alerts
 - Buttons
 - Carousels
 - Dropdowns

## Installation

Install the library.
```bash
npm i --save nowzoo-nzb
```
Add the jQuery, Popper and Bootstrap scripts and the Bootstrap css to your build. For an Angular CLI project, add them in `angular-cli.json`...
```json
{
  "apps": [
    {
      "scripts": [
        "../node_modules/jquery/dist/jquery.slim.min.js",
        "../node_modules/popper.js/dist/umd/popper.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
      ],
      "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ]
    }
  ]
}
```
Import the library.
```ts
// other imports...
import { NzbModule } from 'nowzoo-angular-bootstrap-lite';
@NgModule({
  imports: [
    // other modules...
    NzbModule
  ],
  // etc..
})
export class AppModule { }
```

## Alerts

Directive: `NzbAlertDirective` 

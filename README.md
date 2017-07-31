# Angular Bootstrap Lite

This library is an Angular wrapper for those Bootstrap components that
add and subtract elements from the DOM:

- Modals
- Tooltips
- Popovers

<strong>Important: depends on Bootstrap, Tether and slim jQuery.</strong>
Rather than recreating Bootstrap components from scratch in native Angular, we
use Bootstrap javascript and its dependencies.This is a fundamentally different
approach from other Angular/Bootstrap libraries. Namely, it's not "pure" Angular.
We've went for a bit of impurity for the sake of a smaller codebase and consistency with Bootstrap.

(Want Angular purity? Look here https://github.com/valor-software/ngx-bootstrap or here https://github.com/ng-bootstrap/ng-bootstrap.)




### Quick start

Install the library, Bootstrap 4, Tether, and jQuery
```sh
npm i --save nowzoo-angular-bootstrap-lite bootstrap@^4.0.0-alpha.6 jquery tether
```

Include jQuery slim, Tether and Bootstrap in your build. For an Angular CLI project
add the following entries to the `"scripts"` array in `angular-cli.json`:
```json
{
  "apps": [
	{
	  "scripts": [
		"../node_modules/jquery/dist/jquery.slim.min.js",
  		"../node_modules/tether/dist/js/tether.min.js",
  		"../node_modules/bootstrap/dist/js/bootstrap.min.js"
	  ]

	}
  ]
}
```
This will add the dependencies to your scripts bundle.  The total size is about 146 kB.
For other build systems, consult the documentation to see how to add scripts.

Import the `NzbModule` module into your app module...

```ts
// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NzbModule } from 'nowzoo-angular-bootstrap-lite';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		NzbModule,

	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
```

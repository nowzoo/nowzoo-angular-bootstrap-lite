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




## Quick start

**Step 1:** Install the library, Bootstrap 4, Tether, and jQuery
```sh
npm i --save nowzoo-angular-bootstrap-lite bootstrap@^4.0.0-alpha.6 jquery tether
```

**Step 2:** Include jQuery slim, Tether and Bootstrap in your build. For an Angular CLI project
add the following entries to the `apps[0].scripts` array in `angular-cli.json`:
```
"../node_modules/jquery/dist/jquery.slim.min.js",
"../node_modules/tether/dist/js/tether.min.js",
"../node_modules/bootstrap/dist/js/bootstrap.min.js"
```
This will add the dependencies to your scripts bundle.  The total size is about 146 kB.
For other build systems, consult the documentation to see how to add external scripts.

**Step 3:** Add the Bootstrap 4 styles. How you do this depends on your build; the fast way is to add the following tag to the `<head>` in `index.html`:
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
```

*Note:* Make sure `index.html` conforms the advice given for the [Bootstrap 4 starter template](https://v4-alpha.getbootstrap.com/getting-started/introduction/#starter-template).

**Step 4:** Import `NzbModule` into your app module...

```ts
// app.module.ts
import { NzbModule } from 'nowzoo-angular-bootstrap-lite';

@NgModule({
	imports: [
		// other modules...
		NzbModule
	],
	// etc...
})
export class AppModule { }
```

**Step 5:** Use the services and directives to create modals, popovers and tooltips.  Example link tktk.

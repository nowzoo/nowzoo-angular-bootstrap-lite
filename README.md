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

What's included:

- Modals:
   - `NzbModalService`: display a modal based on a Component type, TemplateRef, or string
- Tooltips &amp; Popovers:
   - `NzbPopupService`: display a tooltip or popover based on a Component type, TemplateRef, or string
   - `nzbTooltip` directive
   - `nzbPopover` directive


### Quick start

Install the library. This will also install Bootstrap and its dependencies.
```sh
npm i nowzoo-angular-bootstrap-lite --save
```

Include jQuery slim, Tether and Bootstrap in your build. For an Angular CLI project
add the following entries to the `"scripts"` array in `angular-cli.json`:
```json
{
  "apps": [
	{
	  "scripts": [
		"node_modules/jquery/dist/jquery.slim.min.js",
		"node_modules/tether/dist/js/tether.min.js",
		"node_modules/bootstrap/dist/js/bootstrap.min.js"
	  ]

	}
  ]
}
```
The required scripts will be added to your scripts bundle.  The total size is about 146 kB.



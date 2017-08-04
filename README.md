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


## Modals API

### NzbService.createModal

`createModal(): NzbModal`

Creates a modal instance.


### NzbModal
A modal instance, with a variety of public methods and properties to examine and manipulate the modal's state.

*Methods*

`show(content: any, options?: any, ariaLabelledById?: string): void`

Shows the modal.

- `content`: A component type, a `TemplateRef` or a plain string.
- `options`: See NzbOptions.
- `ariaLabelledById`: This is used to set the `aria-labelledby` attribute of the top-level modal div. If your modal template has a `.modal-title` element you can safely omit this -- the library will either use the existing id of the `.modal-title` or generate and use a unique id. You should use this parameter if you don't have a `.modal-title` or wish to use a different element.


`close(data?: any): void`

Use this method to hide the modal when you want to indicate
the user has "successfully" accomplished whatever task the modal set.
The modal's `result.dismissed` will be set to false, and `result.data` will contain
whatever you pass.

- `data`: The data the modal collected.

`dismiss(): void`

Use this method to hide the modal when the user has "cancelled out."  The modal's `result.dismissed` will be set to true, and `result.data` will be null.


- `opened(): Promise<any>` Resolves when the modal has been completely shown, that is, when all the Bootstrap animations have completed.
- `closed(): Promise<NzbModalResult>` Resolves when the modal has been completely hidden. See `NzbModalResult` below.
- `destroy(): void` Gracefully closes the modal (if open) and cleans up. Use this when the component that created the modal is itself destroyed (e.g. on a router change.)
- `getContentComponentRef(): ComponentRef<any> | null` If the modal has been shown with a component type, returns the ComponentRef. Otherwise returns null.


*Properties*

- `onShow: EventEmitter<any>` Emits the raw `show.bs.modal` event.
- `onShown: EventEmitter<any>` Emits the raw `shown.bs.modal` event.
- `onHide: EventEmitter<any>`  Emits the raw `hide.bs.modal` event.
- `onHidden: EventEmitter<any>` Emits the raw `hidden.bs.modal` event.
- `status: BehaviorSubject<NzbModalStatus>` The modal's status
- `result: NzbModalResult | null` The modal's result.

### NzbModalOptions

These options can be passed to modal instances when you open them. You can also define your own defaults on the component or application level by providing a custom value or class, e.g.: `{provide: NzbModalOptions, useValue: {animation: false}}`.

*Inherited Bootstrap Options* See https://v4-alpha.getbootstrap.com/components/modal/#options

- `backdrop: boolean | 'static'`  Default: `true`
- `keyboard: boolean`  Default: `true`
- `focus: boolean`  Default: `true`

Note that we don't have a `show` option -- modals are shown via `NzbModal.show`

*Animation and Size*

- `animation: boolean`  Default: `true`
- `size: null | 'sm' | 'lg'`  Default: `null`

*ariaLabelledById*

- `ariaLabelledById: string | null` Default: `null` This handles correctly setting the
`aria-labelledby` attribute on the top level `.modal` div. If not set, we'll look for an
element with the class `.modal-title`. If that element has an id, we'll use the id; otherwise we'll set and use a unique id.

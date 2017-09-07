# nowzoo-angular-bootstrap-lite (nzb)

This library is an Angular 4+ wrapper for  Bootstrap 4 Beta.

<strong>Important: depends on Bootstrap, Tether and slim jQuery.</strong> Rather than recreating Bootstrap components from scratch in native Angular, we use Bootstrap javascript and its dependencies. This is a fundamentally different approach from other Angular/Bootstrap libraries. Namely, it's not "pure" Angular. We've went for a bit of impurity for the sake of a smaller codebase and consistency with Bootstrap.

(Want Angular purity? Look here https://github.com/valor-software/ngx-bootstrap or here https://github.com/ng-bootstrap/ng-bootstrap.)

## Design Goal

Bootstrap works. Angular works. This library attempts to wrap the Bootstrap API as simply and as consistently as possible.

## What's included
 - Alerts
 - Modals
 - Popovers
 - Tooltips
 - Tabs (tabs, pills, list groups)
 - Collapse
 - Carousels
 - Dropdowns

## Installation

Install the library.
```bash
npm i --save nowzoo-angular-bootstrap-lite
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

Use the `nzbAlert` selector in native Bootstrap alert markup.  This creates an instance of `NzbAlertDirective`, with an API that closely follows the native Bootstrap implementation. Notes:

- Bootstrap removes the alert markup when the modal is closed. The library does not change this behavior,
but it does provide an `open` method that reinserts the original markup into the DOM -- effectively showing the alert again.
- Relatedly, you can hide the alert initially using the `initiallyOpen` input.

Directive:  `NzbAlertDirective`

selector: `[nzbAlert]` exportAs: `nzbAlert`

### Usage

```html
<div nzbAlert #alert1="nzbAlert" class="alert alert-warning alert-dismissible fade show" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</div>
```

### Options

- `initiallyOpen: boolean = true` Whether to show the alert initially. Use `[initiallyOpen]="false"` to hide the alert.
- Use the contextual classes (e.g. `alert-warning`) as you would normally.
- Use the `fade` class to control whether the alert opens and closes with the fade transition.
- Use the `alert-dismissable` class if you include a close button.

### Methods

- `close(): void` A wrapper around the native method. Within the modal, you can use `data-dismiss="alert"` as well. Note that Bootstrap removes the markup from the DOM when the alert is closed; we do not change this behavior.
- `open(): void` Reinserts the alert markup (if necessary) and shows the alert.

### Properties

- `events: Observable<Event>` Provides the native bootstrap alert events (`close.bs.alert` and `closed.bs.alert`) as an observable.
- `status: Observable<string>` One of:
  - 'uninitialized'
  - 'opening'
  - 'opened'
  - 'closing'
  - 'closed'

## Carousels

Use the `nzbCarousel` directive in native Bootstrap carousel markup.  This creates an instance of `NzbCarouselDirective`, with an API that closely follows the native API, with the addition of some useful additions. Notes:

- Native carousel events are available as an observable: `carouselInstance.events`.
- The current slide index is

### Options

The Angular directive itself does not have options. Use the native `data-` attributes to set options, such as `interval`. Use the `.active` class to set which `.carousel-item` is initially shown.

### Methods

- `cycle(): void` A wrapper around the native method. Starts the cycling of slides.
- `pause(): void` A wrapper around the native method. Stops the cycling of slides.
- `slideTo(index: number): void` A wrapper around the native `$el.carousel(index)` method.  Shows the item at `index`.
- `prev(): void` A wrapper around the native method. Goes to the previous slide.
- `next(): void` A wrapper around the native method. Goes to the next slide.

### Properties
- `events: Observable<Event>` Provides the native Bootstrap carousel events (`slide.bs.carousel`, `slid.bs.carousel`) as an observable.
- `index: Observable<number>` The index of the currently shown slide.
- `paused: Observable<boolean>` Whether or not the carousel has been paused.
- `animating: Observable<boolean>` Whether or not the carousel is transitioning from one slide to another.
- `data: Observable<any>` The underlying Bootstrap data (i.e., `$el.data('bs.carousel')`).

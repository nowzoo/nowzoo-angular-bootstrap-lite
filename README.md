# Angular Bootstrap Lite

This library is an Angular wrapper for Bootstrap components that require
adding to and subtracting from the DOM:

- Modals
- Tooltips
- Popovers

<strong>Important: depends on Bootstrap, Tether and slim jQuery.</strong>
Rather than recreating Bootstrap components from scratch in native Angular, the library
uses Bootstrap javascript and its dependencies. This is a fundamentally different approach
from other Angular/Bootstrap libraries. Namely, it's not "pure" Angular. But a
bit of impurity for the sake of a smaller codebase, a smaller set of dependencies,
and a better, more consistent UX might be OK.

(Want purity? Look here https://github.com/valor-software/ngx-bootstrap or here https://github.com/ng-bootstrap/ng-bootstrap.)


What's included:

- a service to pop a modal containing a Component, TemplateRef, or string
- a service to pop a tooltip containing a Component, TemplateRef, or string
- a service to pop a popover containing a Component, TemplateRef, or string

### Quick start

```sh
npm i
```

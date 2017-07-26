# Angular Bootstrap Lite
A lightweight implementation of Bootstrap 4 for Angular 4.

This library is an Angular wrapper for those Bootstrap 4 components that require
potentially heavy manipulation of the DOM:

- Modals
- Tooltips
- Popovers

Rather than recreating Bootstrap components from scratch in native Angular, the library
uses Bootstrap javascript and its dependencies. This is a fundamentally different approach
from other Angular/Bootstrap libraries. Namely, it's not "pure" Angular. But a
bit of impurity for the sake of a smaller codebase and better UX might be OK. Pure Angular
alternatives can be found here https://github.com/valor-software/ngx-bootstrap and here https://github.com/ng-bootstrap/ng-bootstrap.

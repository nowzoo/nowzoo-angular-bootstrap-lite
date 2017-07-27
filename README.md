# Angular Bootstrap Lite

This library is an Angular wrapper for those Bootstrap components that
add and subtract elements from the DOM:

- Modals
- Tooltips
- Popovers

<strong>Important: depends on Bootstrap, Tether and slim jQuery.</strong>
Rather than recreating Bootstrap components from scratch in native Angular, we
use Bootstrap javascript and its dependencies.

This is a fundamentally different approach from other Angular/Bootstrap libraries.
Namely, it's not "pure" Angular. We have decided a bit of impurity for the sake of
a smaller codebase and consistency is OK.

(Want purity? Look here https://github.com/valor-software/ngx-bootstrap or here https://github.com/ng-bootstrap/ng-bootstrap.)


What's included:

- Modals:
   - `NzbModalService`: display a modal based on a Component type, TemplateRef, or string
- Tooltips &amp; Popovers:
   - `NzbPopupService`: display a tooltip or popover based on a Component type, TemplateRef, or string
   - `nzbTooltip` directive
   - `nzbPopover` directive


### Quick start

```sh
npm i
```

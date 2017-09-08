---
title: Tooltips
---

- `NzbTooltipDirective` [code](https://github.com/nowzoo/nowzoo-angular-bootstrap-lite/blob/master/src/tooltip/nzb-tooltip.directive.ts)
- `selector: '[nzbTooltip]'`
- `exportAs: 'nzbTooltip'`
- [Examples](https://nowzoo.github.io/nowzoo-angular-bootstrap-lite/tooltips)

## Usage

Simple: use the `title`(or `data-title`) attribute to set the title.
```html
<button class="btn btn-primary"
  nzbTooltip
  #tooltipInstance="nzbTooltip"
  title="Static Title">Tooltip</button>
```
Fancier: use `nzbTooltipTitle` with `ng-template` to interpolate variables
```html
<button class="btn btn-primary"
  nzbTooltip
  #tooltipInstance="nzbTooltip"
  [nzbTooltipTitle]="tooltipTitle">Tooltip</button>
<ng-template #tooltipTitle>
  Shown for {{shownFor}}s
</ng-template>
```
```ts
export class SomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('tooltipInstance') tooltipInstance: NzbTooltipDirective;
  shownFor: number = 0;
  private sub: Subscription;
  private interval: any;
  ngAfterViewInit() {
    this.sub = this.tooltipInstance.status.subscribe((status: string) => {
      switch(status) {
        case 'show':
          this.shownFor = 0;
          this.interval = setInterval(() =>{
            this.shownFor++;
          }, 1000);
          break;
        case 'hidden':
          if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
          }
          break;
      }
    });
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.sub.unsubscribe();
  }
}
```
## Options

- `nzbTooltipTitle: TemplateRef` Optional.
- `nzbTooltipOptions: any` Optional.

You can specify the following Bootstrap [tooltip options] either in `nzbTooltipOptions` or as `data-` attributes:

- `animation?: boolean`
- `container?: string|HTMLElement|false`
- `delay?: number|{show: number, hide: number}`
- `html?: boolean`
- `placement?: string|((popEl:HTMLElement, targetEl: HTMLElement) => string)`
- `template?: string`
- `trigger?: string`
- `offset?: number|string`
- `fallbackPlacement?: string|any[]`

In addition, you can specify whether or not the tooltip animates to hidden when its target is destroyed:
- `animateOnDestroy?: boolean = true`

## Methods

The directive wraps the following native Bootstrap [tooltip methods]:

- `show(): void`
- `hide(): void`
- `toggle(): void`
- `enable(): void`
- `disable(): void`
- `toggleEnabled(): void`
- `update(): void`

## Properties

- `status: Observable<string>` One of:
   - uninitialized
   - show
   - shown
   - hide
   - hidden
- `enabled: Observable<boolean>`
- `events: Observable<Event>` The native Bootstrap [tooltip events]:
   - show.bs.tooltip
   - shown.bs.tooltip
   - hide.bs.tooltip
   - hidden.bs.tooltip


[tooltip methods]:https://getbootstrap.com/docs/4.0/components/tooltips/#methods
[tooltip events]:https://getbootstrap.com/docs/4.0/components/tooltips/#events
[tooltip options]:https://getbootstrap.com/docs/4.0/components/tooltips/#options

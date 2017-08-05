# Modals


## Modals API

### NzbService.createModal

`createModal(): NzbModal`

Creates a modal instance.


### NzbModal
A modal instance, with a variety of public methods and properties to examine and manipulate the modal's state.

#### Methods

`show(content: any, options?: any, ariaLabelledById?: string): void`

Shows the modal.

- `content`: A component type, a `TemplateRef` or a plain string.
- `options`: See NzbOptions.
- `ariaLabelledById`: This is used to set the `aria-labelledby` attribute of the top-level modal div. If your modal template has a `.modal-title` element you can safely omit this -- the library will either use the existing id of the `.modal-title` or generate and use a unique id. You should use this parameter if you don't have a `.modal-title` or wish to use a different element.

---

`close(data?: any): void`

Use this method to hide the modal when you want to indicate
the user has "successfully" accomplished whatever task the modal set.
The modal's `result.dismissed` will be set to false, and `result.data` will contain
whatever you pass.

- `data`: The data the modal collected.

---

`dismiss(): void`

Use this method to hide the modal when the user has "cancelled out."  The modal's `result.dismissed` will be set to true, and `result.data` will be null.

---

`opened(): Promise<void>`

Returns a promise that resolves when the modal has been completely shown,
that is, when all the Bootstrap animations have completed.

---


`closed(): Promise<NzbModalResult>`

Returns a promise that resolves with a `NzbModalResult`
when the modal has been completely hidden.

---

`destroy(): void`

Gracefully closes the modal (if open) and cleans up. Use this in `ngOnDestroy`.

---

`getContentComponentRef(): ComponentRef<any> | null`

If the modal has been shown with a component type, returns the ComponentRef. Otherwise returns null.

---

#### Properties

- `onShow: EventEmitter<any>` Emits the raw `show.bs.modal` event.
- `onShown: EventEmitter<any>` Emits the raw `shown.bs.modal` event.
- `onHide: EventEmitter<any>`  Emits the raw `hide.bs.modal` event.
- `onHidden: EventEmitter<any>` Emits the raw `hidden.bs.modal` event.
- `status: BehaviorSubject<NzbModalStatus>` The modal's status
- `result: NzbModalResult | null` The modal's result.

---

### NzbModalOptions

These options can be passed to modal instances when you open them. You can also define your own defaults on the component or application level by providing a custom value or class, e.g.: `{provide: NzbModalOptions, useValue: {animation: false}}`.

*Inherited Bootstrap Options* See https://v4-alpha.getbootstrap.com/components/modal/#options

- `backdrop: boolean | 'static'`  Default: `true`
- `keyboard: boolean`  Default: `true`
- `focus: boolean`  Default: `true`

*Animation and Size*

- `animation: boolean`  Default: `true`
- `size: null | 'sm' | 'lg'`  Default: `null`

Note that we don't have a `show` option -- modals are shown via `NzbModal.show`

---

### NzbModalStatus

`enum NzbModalStatus`


- `NzbModalStatus.uninitialized`
- `NzbModalStatus.initialized`
- `NzbModalStatus.showing`
- `NzbModalStatus.shown`
- `NzbModalStatus.hiding`
- `NzbModalStatus.hidden`

---

### NzbModalResult

This

- `dismissed: boolean`
- `data: any`

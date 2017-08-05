# Modals

## Example using a component type as the modal content

The component that we'll use as the modal content...

```ts
// example-modal-content.component.ts
import { Component } from '@angular/core';
import { NzbModal } from 'nowzoo-angular-bootstrap-lite';

@Component({
	selector: 'app-example-modal-content',
	template: `
	<div class="modal-header">
		<h5 class="modal-title">Enter Your Name</h5>
		<button type="button" class="close" (click)="modal.dismiss()" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
	</div>
	<div class="modal-body">
		<div class="form-group">
			<label for="example-modal-content-name">Name</label>
			<input type="text" [(ngModel)]="name" class="form-control">
		</div>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary"
			(click)="modal.dismiss()">Cancel</button>
		<button type="button" class="btn btn-primary"
			(click)="modal.close(name)">Save</button>
	</div>
	`
})
export class ExampleModalContentComponent {
	name: string;

	// The NzbModal instance is injected here
	constructor(public modal: NzbModal) { }
}

```

Make sure that you add this component to `entryComponents` in the module...

```ts
// app.module.ts...
import { ExampleModalContentComponent } from './example-modal-content.component';
//other imports...

@NgModule({
	//other stuff...
	entryComponents: [ ExampleModalContentComponent ]
})
export class AppModule { }

```

The component that creates the modal...

```ts
// modal-demo.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
	NzbService,
	NzbModal,
	NzbModalOptions,
	NzbModalResult
} from 'nowzoo-angular-bootstrap-lite';

// import your content component...
import { ExampleModalContentComponent } from './example-modal-content.component';

@Component({
	selector: 'app-modal-demo',
	template: `
	<div class="form-group">
		<button class="btn btn-primary" (click)="showModal()">Open Modal</button>
	</div>
	<div class="form-group">
		<strong>Result:</strong>
		<pre>{{result | json}}</pre>
	</div>
	`
})
export class ModalDemoComponent implements OnInit, OnDestroy {
	modal: NzbModal = null;
	result: NzbModalResult = null;
	options: NzbModalOptions;

	constructor(private nzbService: NzbService) { }

	ngOnInit() {
		this.options = new NzbModalOptions();
		this.modal = this.nzbService.createModal();
	}
	ngOnDestroy() {
		// make sure the modal goes away
		// gracefully if this component is destroyed
		this.modal.destroy();
	}
	showModal() {
		// set up a promise to collect the result...
		this.modal.closed().then(result => {
			this.result = result;
		});
		// show the modal with our content component...
		this.modal.show(ExampleModalContentComponent, this.options);
	}

}

```



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
- `options`: See [NzbOptions](#nzbmodaloprions).
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

Use this method to hide the modal when the user has "cancelled out."  
The modal's `result.dismissed` will be set to true, and `result.data` will be null.

---

`opened(): Promise<void>`

Returns a promise that resolves when the modal has been completely shown,
that is, when all the Bootstrap animations have completed.

---


`closed(): Promise<NzbModalResult>`

Returns a promise that resolves with the modal's
[`NzbModalResult`](#nzbmodalresult)
when the modal has been completely hidden.

---

`destroy(): void`

Gracefully closes the modal (if open) and cleans up. Use this in `ngOnDestroy`.

---

`getContentComponentRef(): ComponentRef<any> | null`

If the modal has been shown with a component type, returns the underlying
`ComponentRef`. Otherwise returns null.

---

#### Properties

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

*Animation and Size*

- `animation: boolean`  Default: `true`
- `size: null | 'sm' | 'lg'`  Default: `null`

Note that we don't have a `show` option -- modals are shown via `NzbModal.show`



### NzbModalStatus

`enum NzbModalStatus`


- `NzbModalStatus.uninitialized`
- `NzbModalStatus.initialized`
- `NzbModalStatus.showing`
- `NzbModalStatus.shown`
- `NzbModalStatus.hiding`
- `NzbModalStatus.hidden`



### NzbModalResult

This represents the result of the user's interaction with the modal.

- `dismissed: boolean`
- `data: any`

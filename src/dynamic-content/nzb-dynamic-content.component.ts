import {
	Component,
	ViewChild,
	ViewContainerRef,
	ElementRef,
	Input,
	TemplateRef,
	ApplicationRef,
	Renderer2
} from '@angular/core';

@Component({
	selector: 'nzb-dynamic-content',
	template: `<ng-template #container></ng-template>`
})
export class NzbDynamicContentComponent {
	@ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

	private textNode: any = null;

	constructor(
		private appRef: ApplicationRef,
		private renderer: Renderer2,
		private element: ElementRef
	) {}

	updateContent(content: any, context?: any) {
		this.container.clear();
		if (this.textNode){
			this.renderer.removeChild(this.element.nativeElement, this.textNode);
			this.textNode = null;
		}
		if (content instanceof TemplateRef) {
			const viewRef = content.createEmbeddedView(context);
			this.container.insert(viewRef)
		} else {
			if (typeof content == 'string'){
				this.textNode = this.renderer.createText(content);
				this.renderer.appendChild(this.element.nativeElement, this.textNode)
			}
		}
	}


}

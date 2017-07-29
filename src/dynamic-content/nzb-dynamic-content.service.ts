import {
	Injectable,
	TemplateRef,
	ComponentFactoryResolver,
	ReflectiveInjector,
	RendererFactory2,
	Renderer2,
	ComponentRef,
	Injector,
	ApplicationRef
} from '@angular/core';
import { NzbDynamicContent }from './nzb-dynamic-content';
import { NzbDynamicContentComponent }from './nzb-dynamic-content.component';

/**
 * NzbDynamicContentFactoryService class.
 */
@Injectable()
export class NzbDynamicContentService {
	private renderer: Renderer2;
	constructor(
		private injector: Injector,
		private appRef: ApplicationRef,
		private cfr: ComponentFactoryResolver,
		private rendererFactory: RendererFactory2
	) {
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	/**
	 * Creates a dynamic content entry.
	 * @param  {any}                content                 A string, component type or TemplateRef
	 * @param  {any}                templateContext         The context to be attached to the template view, e.g. the modal or tooltip instance.
	 * @param  {ReflectiveInjector} contentComponenInjector The injector to be used for creating the content component. This injects the modal/tooltip/popover instance into the component.
	 * @param  {boolean}            allowHTML               Only used if content is a string. If false, we create a text node,otherwice we create elements.
	 * @return {NzbDynamicContent}
	 */
	createDynamicContent(
		content: any,
		templateContext: any,
		contentComponenInjector: ReflectiveInjector,
		allowHTML: boolean,
	): NzbDynamicContent {
		if (! content) {
			return new NzbDynamicContent([]);
		}

		if (content instanceof TemplateRef) {
			const viewRef = content.createEmbeddedView(templateContext);
			return new NzbDynamicContent([viewRef.rootNodes], viewRef);
		}
		if (typeof content === 'string') {
			let el;
			if (allowHTML){
				el = this.renderer.createElement('div');
				el.innerHTML = content;

			} else {
				el = this.renderer.createText(content);
			}
			return new NzbDynamicContent([[el]]);
		}
		try {
			const componentFactory = this.cfr.resolveComponentFactory(content);
			const componentRef = componentFactory.create(contentComponenInjector);
			return new NzbDynamicContent(
				[[componentRef.location.nativeElement]],
				componentRef.hostView,
				componentRef
			);
		} catch(e) {
			return new NzbDynamicContent([]);
		}
	}

	attach(dynamicContent: NzbDynamicContent): ComponentRef<NzbDynamicContentComponent> {
		const factory = this.cfr.resolveComponentFactory(NzbDynamicContentComponent);
		const componentRef = factory.create(this.injector, dynamicContent.nodes);
		if (dynamicContent.viewRef){
			this.appRef.attachView(dynamicContent.viewRef);
		}
		this.appRef.attachView(componentRef.hostView);
		this.renderer.appendChild(document.body, componentRef.location.nativeElement);
		return componentRef;
	}
}

import {
	Injectable,
	RendererFactory2, Renderer2,
	ApplicationRef,
	ComponentFactoryResolver,
	Injector
} from '@angular/core';

import { NzbDynamicContentService } from './dynamic-content/nzb-dynamic-content.service';
import { NzbModalOptions } from './modal/nzb-modal-options';
import { NzbModal } from './modal/nzb-modal';

/**
 * NzbService class.
 */
@Injectable()
export class NzbService {
	public renderer: Renderer2;
	private elementCounter: number = 0;
	constructor(
		public cfr: ComponentFactoryResolver,
		public injector: Injector,
		public appRef: ApplicationRef,
		public rendererFactory: RendererFactory2,
		public contentService: NzbDynamicContentService,
		public defaultModalOptions: NzbModalOptions
	) {
		this.renderer = this.rendererFactory.createRenderer(null, null);
		this.elementCounter = 0;
	}

	public getUniqueId(prefix: string) {
		prefix = prefix || 'nzb-generated-';
		this.elementCounter++;
		return prefix + this.elementCounter.toString();
	}

	public createModal(): NzbModal {
		return new NzbModal(this);
	}

}

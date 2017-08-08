import {
	TemplateRef,
	Injectable
} from '@angular/core';

import { NzbPopupOptions } from './nzb-popup-options.class'


@Injectable()
export class NzbPopoverOptions extends NzbPopupOptions {
	content?:string|TemplateRef<any>	= '';
	template?: string					= '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>';
	trigger?: string					= 'click';

	normalize(raw?: any){
		super.normalize(raw);
		raw = raw || {};
		if ('string' === typeof raw.content || raw.content instanceof TemplateRef){
			this.content = raw.content;
		}
	}
}

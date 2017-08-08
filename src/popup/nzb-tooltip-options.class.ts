import {
	TemplateRef,
	Injectable
} from '@angular/core';

import { NzbPopupOptions } from './nzb-popup-options.class'


@Injectable()
export class NzbTooltipOptions extends NzbPopupOptions {
	template?: string					= '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>';
	trigger?: string					= 'click';

	normalize(raw?: any){
		super.normalize(raw);
	}
}

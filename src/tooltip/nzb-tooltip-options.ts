import { Injectable } from '@angular/core';
import { NzbDelay, NzbPlacementCallback } from '../common/popup-types';
@Injectable()
export class NzbTooltipOptions {
	animation?: boolean							= true;
	container?: any								= 'body';
	delay: number | NzbDelay	 				= 0;
	html?: boolean								= false;
	placement?: string | NzbPlacementCallback 	= 'top';
	template?: string 							= '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>';
	title?: any									= null;
	trigger: string								= 'hover focus';
	constraints?: any[]							= [];
	offset?: string								= '0 0';
};

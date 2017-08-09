import {
	TemplateRef,
	Injectable
} from '@angular/core';

import { NzbPopupDelay, NzbPopupPlacementCallback } from './nzb-popup.types'

export class NzbPopupOptions {
	animation?: boolean								= true;
	container?: string|false						= false;
	delay?: number|NzbPopupDelay					= 0;
	html?: boolean									= false;
	placement?: string|NzbPopupPlacementCallback	= 'top';
	template?: string;
	trigger?: string;
	constraints?: any								= [];
	offset?: string									= '0 0';
	title?: string|TemplateRef<any>					= '';

	normalize(raw?: any) {
		raw = raw || {};
		if ('boolean' === typeof raw.animation){
			this.animation = raw.animation;
		}
		if ('string' === typeof raw.container || false === raw.container){
			this.container = raw.container;
		}
		if ('number' === typeof raw.delay || 'object' === typeof raw.delay){
			this.delay = raw.delay;
		}
		if ('boolean' === typeof raw.html){
			this.html = raw.html;
		}
		if (raw.placement){
			this.placement = raw.placement;
		}
		if ('string' === typeof raw.template){
			this.template = raw.template;
		}
		if ('string' === typeof raw.trigger){
			this.trigger = raw.trigger;
		}
		if (raw.constraints){
			this.constraints = raw.constraints;
		}
		if ('string' === typeof raw.offset){
			this.offset = raw.offset;
		}
		if ('string' === typeof raw.title || raw.title instanceof TemplateRef){
			this.title = raw.title;
		}
	}
}

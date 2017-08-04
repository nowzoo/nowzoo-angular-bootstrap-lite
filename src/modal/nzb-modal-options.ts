import { Injectable } from '@angular/core';

@Injectable()
export class NzbModalOptions {
	backdrop?: boolean | 'static'		= true;
	keyboard?: boolean					= true;
	focus?: boolean						= true;
	animation?: boolean					= true;
	size?: 'sm' | 'lg' | null			= null;
};

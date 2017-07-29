import { ViewRef, ComponentRef } from '@angular/core';


export class NzbDynamicContent {
	constructor(
		public nodes: any[],
		public viewRef?: ViewRef,
		public componentRef?: ComponentRef<any>
	) {}
}

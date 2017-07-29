import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NzbService } from './nzb.service';
import { NzbDynamicContentService } from './dynamic-content/nzb-dynamic-content.service';
import { NzbDynamicContentComponent } from './dynamic-content/nzb-dynamic-content.component';
import { NzbModalOptions } from './modal/nzb-modal-options';
import { NzbModalComponent } from './modal/nzb-modal.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		NzbDynamicContentComponent,
		NzbModalComponent
	],
	exports: [
		NzbDynamicContentComponent,
		NzbModalComponent
	],
	entryComponents: [
		NzbDynamicContentComponent,
		NzbModalComponent
	],
	providers: [
		NzbService,
		NzbDynamicContentService,
		NzbModalOptions
	]
})
export class NzbModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NzbService } from './nzb.service';
import { NzbDynamicContentService } from './dynamic-content/nzb-dynamic-content.service';
import { NzbDynamicContentComponent } from './dynamic-content/nzb-dynamic-content.component';
import { NzbModalOptions } from './modal/nzb-modal-options';
import { NzbModalComponent } from './modal/nzb-modal.component';

import { NzbPopoverDirective } from './popup/nzb-popover.directive';
import { NzbPopoverOptions } from './popup/nzb-popover-options.class';

import { NzbTooltipDirective } from './popup/nzb-tooltip.directive';
import { NzbTooltipOptions } from './popup/nzb-tooltip-options.class';



@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		NzbDynamicContentComponent,
		NzbModalComponent,
		NzbTooltipDirective,
		NzbPopoverDirective

	],
	exports: [
		NzbDynamicContentComponent,
		NzbModalComponent,
		NzbTooltipDirective,
		NzbPopoverDirective
	],
	entryComponents: [
		NzbDynamicContentComponent,
		NzbModalComponent
	],
	providers: [
		NzbService,
		NzbDynamicContentService,
		NzbModalOptions,
		NzbTooltipOptions,
		NzbPopoverOptions
	]
})
export class NzbModule {}

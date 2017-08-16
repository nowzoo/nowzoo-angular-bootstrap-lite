import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzbDynamicContentComponent } from './common/nzb-dynamic-content.component';
import { NzbTooltipDirective } from './tooltip/nzb-tooltip.directive';
import { NzbPopoverDirective } from './popover/nzb-popover.directive';
import { NzbModalDirective } from './modal/nzb-modal.directive';
import { NzbCollapseDirective } from './modal/nzb-collapse.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NzbDynamicContentComponent,
    NzbTooltipDirective,
    NzbPopoverDirective,
    NzbModalDirective,
    NzbCollapseDirective
  ],
  providers:[

  ],
  exports: [
    NzbTooltipDirective,
    NzbPopoverDirective,
    NzbModalDirective,
    NzbCollapseDirective
  ],
  entryComponents: [
    NzbDynamicContentComponent
  ]
})
export class NzbModule { }

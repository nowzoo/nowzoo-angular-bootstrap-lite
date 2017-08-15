import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzbDynamicContentComponent } from './common/nzb-dynamic-content.component';
import { NzbTooltipDirective } from './tooltip/nzb-tooltip.directive';
import { NzbPopoverDirective } from './popover/nzb-popover.directive';
import { NzbModalDirective } from './modal/nzb-modal.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NzbDynamicContentComponent,
    NzbTooltipDirective,
    NzbPopoverDirective,
    NzbModalDirective
  ],
  providers:[

  ],
  exports: [
    NzbTooltipDirective,
    NzbPopoverDirective,
    NzbModalDirective
  ],
  entryComponents: [
    NzbDynamicContentComponent
  ]
})
export class NzbModule { }

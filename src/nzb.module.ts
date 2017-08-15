import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzbDynamicContentComponent } from './common/nzb-dynamic-content.component';
import { NzbTooltipDirective } from './tooltip/nzb-tooltip.directive';
import { NzbPopoverDirective } from './popover/nzb-popover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NzbDynamicContentComponent,
    NzbTooltipDirective,
    NzbPopoverDirective
  ],
  providers:[

  ],
  exports: [
    NzbTooltipDirective,
    NzbPopoverDirective
  ],
  entryComponents: [
    NzbDynamicContentComponent
  ]
})
export class NzbModule { }

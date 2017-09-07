import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzbAlertDirective } from './alert/nzb-alert.directive';
import { NzbCarouselDirective } from './carousel/nzb-carousel.directive';
import { NzbCollapseDirective } from './collapse/nzb-collapse.directive';
import { NzbModalDirective } from './modal/nzb-modal.directive';
import { NzbPopoverDirective } from './popover/nzb-popover.directive';
import { NzbPopoverOptions } from './popover/nzb-popover-options.class';
import { NzbTooltipDirective } from './tooltip/nzb-tooltip.directive';
import { NzbTooltipOptions } from './tooltip/nzb-tooltip-options.class';
import { NzbTabsComponent } from './tabs/nzb-tabs.component';
import { NzbTabPaneDirective } from './tabs/nzb-tab-pane.directive';
import { NzbTabDirective } from './tabs/nzb-tab.directive';
import { NzbDropdownDirective } from './dropdown/nzb-dropdown.directive';
import { NzbDynamicContentComponent } from './common/nzb-dynamic-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NzbAlertDirective,
    NzbCarouselDirective,
    NzbCollapseDirective,
    NzbDynamicContentComponent,
    NzbModalDirective,
    NzbPopoverDirective,
    NzbTooltipDirective,
    NzbTabsComponent,
    NzbTabPaneDirective,
    NzbTabDirective,
    NzbDropdownDirective
  ],
  exports: [
    NzbAlertDirective,
    NzbCarouselDirective,
    NzbCollapseDirective,
    NzbDynamicContentComponent,
    NzbModalDirective,
    NzbPopoverDirective,
    NzbTooltipDirective,
    NzbTabsComponent,
    NzbTabPaneDirective,
    NzbTabDirective,
    NzbDropdownDirective
  ],
  providers: [
    NzbPopoverOptions,
    NzbTooltipOptions
  ],
  entryComponents: [
    NzbDynamicContentComponent
  ]
})
export class NzbModule { }

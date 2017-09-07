import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzbDynamicContentComponent } from './common/nzb-dynamic-content.component';
import { NzbTooltipDirective } from './tooltip/nzb-tooltip.directive';
import { NzbPopoverDirective } from './popover/nzb-popover.directive';
import { NzbModalDirective } from './modal/nzb-modal.directive';
import { NzbCollapseDirective } from './collapse/nzb-collapse.directive';
import { NzbTooltipOptions } from './tooltip/nzb-tooltip-options.class';
import { NzbPopoverOptions } from './popover/nzb-popover-options.class';
import { NzbTabsComponent } from './tabs/nzb-tabs.component';
import { NzbTabPaneDirective } from './tabs/nzb-tab-pane.directive';
import { NzbTabDirective } from './tabs/nzb-tab.directive';
import { NzbAlertDirective } from './alert/nzb-alert.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NzbDynamicContentComponent,
    NzbTooltipDirective,
    NzbPopoverDirective,
    NzbModalDirective,
    NzbCollapseDirective,
    NzbTabsComponent,
    NzbTabPaneDirective,
    NzbTabDirective,
    NzbAlertDirective,
  ],
  providers:[
    NzbTooltipOptions,
    NzbPopoverOptions
  ],
  exports: [
    NzbTooltipDirective,
    NzbPopoverDirective,
    NzbModalDirective,
    NzbCollapseDirective,
    NzbTabsComponent,
    NzbTabPaneDirective,
    NzbTabDirective,
    NzbAlertDirective,
  ],
  entryComponents: [
    NzbDynamicContentComponent
  ]
})
export class NzbModule { }

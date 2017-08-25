import { Injectable } from '@angular/core';
import { NzbPopupOptions } from '../common/nzb-popup-options.class';

@Injectable()
export class NzbTooltipOptions extends NzbPopupOptions {
  trigger?: string = 'hover focus';
  template?: string = '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>';
  placement?: string = 'top'
}

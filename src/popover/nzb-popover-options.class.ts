import { Injectable } from '@angular/core';
import { NzbPopupOptions } from '../common/nzb-popup-options.class';

@Injectable()
export class NzbPopoverOptions extends NzbPopupOptions {
  trigger?: string = 'click';
  template?: string = '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>';
  placement?: string = 'right'
}

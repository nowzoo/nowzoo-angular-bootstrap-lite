import { NzbTabDirective } from './nzb-tab.directive';
import { NzbTabPaneDirective } from './nzb-tab-pane.directive';

export class NzbTabData {
  id: string;
  tab: NzbTabDirective;
  pane?: NzbTabPaneDirective;
  status: string|null = null;
  active: boolean = false;
  visible: boolean = false;

  constructor(tab: NzbTabDirective){
    this.tab = tab;
    this.id = tab.id;
  }
}

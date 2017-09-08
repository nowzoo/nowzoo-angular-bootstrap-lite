import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { NzbTabsComponent } from 'nowzoo-angular-bootstrap-lite';
@Component({
  selector: 'app-tabs-observables',
  templateUrl: './tabs-observables.component.html',
  styleUrls: ['./tabs-observables.component.scss']
})
export class TabsObservablesComponent implements AfterViewInit, OnDestroy {
  @Input('tabs') tabs: NzbTabsComponent;
  constructor() { }
  private tabsSub: Subscription;
  private activeTabSub: Subscription;
  private eventsSub: Subscription;
  private events: Event[] = [];
  last5: Event[] = [];
  tabsData: any[];
  activeTabData: any;

  ngAfterViewInit() {
    setTimeout(() =>{
      this.activeTabSub = this.tabs.activeTab.subscribe((tabData: any) => {
        this.activeTabData = tabData ? {id: tabData.id, active: tabData.active, visible: tabData.visible} : tabData;
      });

      this.tabsSub = this.tabs.tabs.subscribe((tabs: any[]) => {
        this.tabsData = tabs.map((tabData) => {
          return tabData ? {id: tabData.id, active: tabData.active, visible: tabData.visible} : tabData;
        });
      });
      this.eventsSub = this.tabs.events.subscribe((event: Event) => {
        this.events.push(event);
        this.last5 = this.events.slice(Math.max(this.events.length - 5, 0));
      });
    })

  }

  ngOnDestroy() {
    this.activeTabSub.unsubscribe();
    this.tabsSub.unsubscribe();
    this.eventsSub.unsubscribe();
  }
}

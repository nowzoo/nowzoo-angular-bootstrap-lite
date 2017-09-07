import {
  Component,
  AfterContentInit,
  OnInit,
  ElementRef,
  Input,
  ContentChildren,
  EventEmitter,
  Renderer2,
  QueryList,
  NgZone
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
declare const jQuery: any;

import { NzbTabDirective } from './nzb-tab.directive';
import { NzbTabPaneDirective } from './nzb-tab-pane.directive';
import { NzbTabData } from './nzb-tab-data.class';

function getRandomId() {
  let min = Math.ceil(1);
  let max = Math.floor(9999999);
  return 'nzb-tabs-' + (Math.floor(Math.random() * (max - min + 1)) + min).toString(); //The maximum is inclusive and the minimum is inclusive
}

@Component({
  selector: 'nzb-tabs',
  exportAs: 'nzbTabs',
  template: `<ng-content></ng-content>`
})
export class NzbTabsComponent implements AfterContentInit, OnInit {
  @Input() animation: boolean = true;
  @Input() uniqueId: string;
  @Input() shownTab: number|string;
  @ContentChildren(NzbTabDirective) nzbTabDirectives: QueryList<NzbTabDirective>;
  @ContentChildren(NzbTabPaneDirective) nzbTabPaneDirectives: QueryList<NzbTabPaneDirective>;

  private ngUnsubscribe: EventEmitter<any> = new EventEmitter();
  private tabsMap: Map<string, NzbTabData> = new Map();



  private tabsSubject: BehaviorSubject<NzbTabData[]> = new BehaviorSubject([]);
  get tabs(): Observable<NzbTabData[]> {
    return this.tabsSubject.asObservable();
  }
  private activeTabSubject: BehaviorSubject<NzbTabData|null> = new BehaviorSubject(null);
  get activeTab(): Observable<NzbTabData|null> {
    return this.activeTabSubject.asObservable();
  }

  private eventsSubject: Subject<Event> = new Subject();
  get events(): Observable<Event> {
    return this.eventsSubject.asObservable();
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) { }


  private init() {
    const tabs: NzbTabData[] = [];
    const ids: string[] = [];
    let activeId: string|null = null;
    let activeTab;
    this.tabsMap.clear();
    this.ngZone.runOutsideAngular(() => {
      jQuery(this.elementRef.nativeElement).on('show.bs.tab shown.bs.tab hide.bs.tab hidden.bs.tab', (event:Event) => {

        this.ngZone.run(() => {
          const id = jQuery(event.target).attr('nzbTab');
          const data: NzbTabData|null = this.tabsMap.get(id) || null;
          const tabs: NzbTabData[] = [];
          if (data) {
            data.status = event.type;
            switch(event.type) {
              case 'hidden':
                data.visible = false;
                break;
              case 'hide':
                data.active = false;
                break;
              case 'show':
                data.active = true;
                data.visible = true;
                this.activeTabSubject.next(data);
                break;
            }
          }
          this.tabsMap.forEach((entry: NzbTabData) => {
            tabs.push(entry);
          })
          this.tabsSubject.next(tabs);
          this.eventsSubject.next(event);
        })
      })
    })


    this.nzbTabDirectives.forEach((tab: NzbTabDirective) => {
      const tabData = new NzbTabData(tab);
      this.nzbTabPaneDirectives.forEach((pane: NzbTabPaneDirective) => {
          if (pane.id === tab.id){
            ids.push(tab.id);
            tabData.pane = pane;
            tabs.push(tabData);
            this.tabsMap.set(tab.id, tabData);
          }
      });
    });
    if (tabs.length > 0) {
      if (typeof this.shownTab === 'string'){
        if (ids.indexOf(this.shownTab) > -1) {
          activeId = this.shownTab;
        }
      } else {
        if (typeof this.shownTab === 'number'){
          if (this.shownTab < ids.length) {
            activeId = ids[this.shownTab]
          }
        }
      }
      if (! activeId) {
        activeId =  tabs[0].tab.id;
      }
    }



    tabs.forEach((tab: NzbTabData) => {
      const paneId = this.uniqueId + '-' + tab.id;
      const tabId = paneId + '-tab';
      tab.tab.data = tab;
      if (! tab.pane){
        return;
      }
      tab.pane.data = tab;



      this.renderer.setAttribute(tab.pane.el, 'id', paneId);
      this.renderer.setAttribute(tab.pane.el, 'role', 'tabpanel');
      this.renderer.setAttribute(tab.pane.el, 'aria-labelledby', tabId);
      this.renderer.addClass(tab.pane.el, 'tab-pane');
      if (this.animation){
        this.renderer.addClass(tab.pane.el, 'fade');
      }
      if (activeId === tab.id) {
        this.renderer.addClass(tab.pane.el, 'active');
        this.renderer.addClass(tab.tab.el, 'active');
        if (this.animation){
          this.renderer.addClass(tab.pane.el, 'show');
        }
      }
      this.renderer.setAttribute(tab.tab.el, 'role', 'tab');
      this.renderer.setAttribute(tab.tab.el, 'href', '#' + paneId);
      this.renderer.setAttribute(tab.tab.el, 'aria-controls',  paneId);
      this.renderer.setAttribute(tab.tab.el, 'aria-expanded',  'false');
      this.renderer.setAttribute(tab.tab.el, 'id',  tabId);
      this.renderer.setAttribute(tab.tab.el, 'data-toggle', 'tab');

      if (activeId === tab.id) {
        activeTab = tab;
      }
    })
    if (activeTab) {
      this.activeTabSubject.next(activeTab);
    }
    this.tabsSubject.next(tabs);

  }

  ngOnInit() {
    this.uniqueId = this.uniqueId || 'nzb-tabs-' + Math.random().toString().replace('.', '');

  }

  ngAfterContentInit() {
    setTimeout(() => {
      Observable.combineLatest(this.nzbTabDirectives.changes, this.nzbTabPaneDirectives.changes)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(() => {
          console.log('got here ngAfterContentInit');
        })
      this.init();
    })

  }

  show(id: string): void {
    const tab: any = this.tabsMap.get(id);
    if (tab) {
      jQuery(tab.tab.el).tab('show');
    }
  }

}

import {
  Component,
  AfterContentInit,
  OnInit,
  ElementRef,
  Input,
  ContentChildren,
  EventEmitter,
  Renderer2,
  QueryList
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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
  template: `<ng-content></ng-content>`
})
export class NzbTabsComponent implements AfterContentInit, OnInit {
  @Input() animation: boolean = true;
  @Input() uniqueId: string;
  @Input() shownTab: number|string;
  @ContentChildren(NzbTabDirective) nzbTabDirectives: QueryList<NzbTabDirective>;
  @ContentChildren(NzbTabPaneDirective) nzbTabPaneDirectives: QueryList<NzbTabPaneDirective>;

  private ngUnsubscribe: EventEmitter<any> = new EventEmitter();
  private tabs: Map<string, NzbTabData> = new Map();

  activeTab: BehaviorSubject<NzbTabData|null> = new BehaviorSubject(null);
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }


  private init() {
    const tabs: NzbTabData[] = [];
    const ids: string[] = [];
    let activeId: string|null = null;
    this.tabs.clear();
    jQuery(this.elementRef.nativeElement).on('show.bs.tab shown.bs.tab hide.bs.tab hidden.bs.tab', (event:Event) => {
      const id = jQuery(event.target).attr('nzbTab');
      const data: NzbTabData|null = this.tabs.get(id) || null;
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
            this.activeTab.next(data);
            break;
        }
      }
    })

    this.nzbTabDirectives.forEach((tab: NzbTabDirective) => {
      const tabData = new NzbTabData(tab);
      this.nzbTabPaneDirectives.forEach((pane: NzbTabPaneDirective) => {
          if (pane.id === tab.id){
            ids.push(tab.id);
            tabData.pane = pane;
            tabs.push(tabData);
            this.tabs.set(tab.id, tabData);
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
        jQuery(tab.tab.el).tab('show');
      } else {
        jQuery(tab.tab.el).tab();
      }
    })


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




}

import { Component, OnInit, OnDestroy,
  Input, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';


declare const jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  @ViewChild('columns') columnsElementRef: ElementRef;
  @ViewChild('route') routeElementRef: ElementRef;
  private routerSub: Subscription;
  currentLink: any = null;
  sidebarLink: any = null;
  sidebarOpen: boolean = false;
  sidebarItem: any = null;
  links: any[] = [
    { label: 'Home', routerLink: '/', fragment: 'top', children: []},
    { label: 'Modals', routerLink: '/modals', fragment: 'top', children: [
      { label: 'Quick Start', routerLink: '/modals', fragment: 'quickstart' },
      { label: 'Overview', routerLink: '/modals', fragment: 'overview', children: [
        { label: 'Goals', routerLink: '/modals', fragment: 'goals' },
        { label: 'How it works', routerLink: '/modals', fragment: 'how' },
        { label: 'Notes', routerLink: '/modals', fragment: 'notes' },
      ] },
      { label: 'API', routerLink: '/modals', fragment: 'api', children: [
        { label: 'show()', routerLink: '/modals', fragment: 'show' },
        { label: 'hide()', routerLink: '/modals', fragment: 'hide' },
        { label: 'handleUpdate()', routerLink: '/modals', fragment: 'handle-update' },
        { label: 'events', routerLink: '/modals', fragment: 'events' },
        { label: 'status', routerLink: '/modals', fragment: 'status' },
      ] },
      { label: 'Options', routerLink: '/modals', fragment: 'options', children: [
        { label: 'Animation', routerLink: '/modals', fragment: 'animation' },
        { label: 'Size', routerLink: '/modals', fragment: 'size' },
        { label: 'Backdrop', routerLink: '/modals', fragment: 'backdrop' },
        { label: 'Keyboard', routerLink: '/modals', fragment: 'keyboard' },
        { label: 'Focus', routerLink: '/modals', fragment: 'focus' },
      ] },
      { label: 'Other Examples', routerLink: '/modals', fragment: 'examples', children: [
        { label: 'Show modal immediately', routerLink: '/modals', fragment: 'show-on-instantiation' },
        { label: 'Modal hidden gracefully', routerLink: '/modals', fragment: 'goes-away-nicely' },
      ] },
    ]},
    { label: 'Tooltips', routerLink: '/tooltips', fragment: 'top', children: []},
    { label: 'Popovers', routerLink: '/popovers', fragment: 'top', children: [
      { label: 'Quick Start', routerLink: '/popovers', fragment: 'quickstart'},
      { label: 'API', routerLink: '/popovers', fragment: 'api', children: [
        { label: 'Inputs', routerLink: '/popovers', fragment: 'inputs', children: [
          { label: 'nzbPopoverTitle', routerLink: '/popovers', fragment: 'title' },
          { label: 'nzbPopoverContent', routerLink: '/popovers', fragment: 'content' },
          { label: 'nzbPopoverOptions', routerLink: '/popovers', fragment: 'options' , children: [
            {label: 'Providing app-wide defaults', routerLink: '/popovers', fragment: 'options-provider'},
            {label: 'animation', routerLink: '/popovers', fragment: 'animation'},
            {label: 'container', routerLink: '/popovers', fragment: 'container'},
            {label: 'delay', routerLink: '/popovers', fragment: 'delay'},
            {label: 'html', routerLink: '/popovers', fragment: 'html'},
            {label: 'placement', routerLink: '/popovers', fragment: 'placement'},
            {label: 'template', routerLink: '/popovers', fragment: 'template'},
            {label: 'trigger', routerLink: '/popovers', fragment: 'trigger'},
            {label: 'offset', routerLink: '/popovers', fragment: 'offset'},
            {label: 'fallbackPlacement', routerLink: '/popovers', fragment: 'fallback-placement'},
            {label: 'animateOnDestroy', routerLink: '/popovers', fragment: 'animate-on-destroy'},

          ]},

        ]},
        {label: 'Methods', routerLink: '/popovers', fragment: 'methods', children:[
          {label: 'show()', routerLink: '/popovers', fragment: 'show'},
          {label: 'hide()', routerLink: '/popovers', fragment: 'hide'},
          {label: 'toggle()', routerLink: '/popovers', fragment: 'toggle'},
          {label: 'update()', routerLink: '/popovers', fragment: 'update'},
        ]}
      ]}
    ]},
  ];

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {

    this.routerSub = this.router.events.filter((e:any) => e instanceof NavigationEnd).subscribe(e => {
      this.toggleSidebar(false);
      const parts = e.url.split('#');

      const current = this.links.filter(link => {
        return link.routerLink === parts[0];
      })[0] || null;

      if (current){
        this.currentLink = Object.assign({fragment: 'top'}, current);
        this.sidebarLink = {children: this.currentLink.children};
        const element = document.getElementById(parts[1] || 'top');
        if (element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      } else {
        this.currentLink = null;
        this.sidebarLink = null;
      }

    })
  }
  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  toggleSidebar(force?: boolean) {
    if (typeof force === 'boolean') {
      this.sidebarOpen = force;
    } else {
      this.sidebarOpen = ! this.sidebarOpen;
    }
    if (this.sidebarOpen){
      this.renderer.addClass(this.columnsElementRef.nativeElement, 'sidebar-open');
    } else {
      this.renderer.removeClass(this.columnsElementRef.nativeElement, 'sidebar-open');
    }

  }
}

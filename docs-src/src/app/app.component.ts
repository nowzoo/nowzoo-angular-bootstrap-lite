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
        { label: 'show()', routerLink: '/modals', fragment: 'api-show' },
        { label: 'hide()', routerLink: '/modals', fragment: 'api-hide' },
        { label: 'toggle()', routerLink: '/modals', fragment: 'api-toggle' },
        { label: 'handleUpdate()', routerLink: '/modals', fragment: 'api-handle-update' },
        { label: 'events', routerLink: '/modals', fragment: 'api-events' },
        { label: 'status', routerLink: '/modals', fragment: 'api-status' },
      ] },
      { label: 'Options', routerLink: '/modals', fragment: 'options', children: [
        { label: 'Animation', routerLink: '/modals', fragment: 'options-animation' },
        { label: 'Size', routerLink: '/modals', fragment: 'options-size' },
        { label: 'data-backdrop', routerLink: '/modals', fragment: 'options-backdrop' },
        { label: 'data-focus', routerLink: '/modals', fragment: 'options-focus' },
        { label: 'data-keyboard', routerLink: '/modals', fragment: 'options-keyboard' },
        { label: 'data-show (alternative)', routerLink: '/modals', fragment: 'options-show' },
      ] },

      { label: 'Other Examples', routerLink: '/modals', fragment: 'examples', children: [
        { label: 'Collecting User Input', routerLink: '/modals', fragment: 'example-user-input' },
        { label: 'Wrapping a Component', routerLink: '/modals', fragment: 'example-wrap-component' },
        { label: 'YouTube Video', routerLink: '/modals', fragment: 'example-youtube' },
        { label: 'Modals Go Away Nicely', routerLink: '/modals', fragment: 'example-go-away' },
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
      const paths = parts[0].split('/');
      const current = this.links.filter(link => {
        return link.routerLink === '/' + paths[1];
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

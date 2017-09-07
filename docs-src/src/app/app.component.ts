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
    { label: 'Alerts', routerLink: '/alerts', fragment: 'top', children: []},
    { label: 'Modals', routerLink: '/modals', fragment: 'top', children: [
      { label: 'Quick Start', routerLink: '/modals', fragment: 'quickstart' },
      { label: 'Overview', routerLink: '/modals', fragment: 'overview', children: [
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
        { label: 'Animation: .fade', routerLink: '/modals', fragment: 'options-animation' },
        { label: 'Size: .modal-sm and .modal-lg', routerLink: '/modals', fragment: 'options-size' },
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
      { label: 'Options', routerLink: '/popovers', fragment: 'options', children:[
        { label: 'Title', routerLink: '/popovers', fragment: 'options-title', children: [
          {label: 'From Attribute: title or data-title', routerLink: '/popovers', fragment: 'options-title-attributes'},
          {label: 'From Template: nzbPopoverTitle', routerLink: '/popovers', fragment: 'options-title-template'},

        ]},
        { label: 'Content', routerLink: '/popovers', fragment: 'options-content', children: [
          {label: 'From Attribute: data-content', routerLink: '/popovers', fragment: 'options-content-attribute'},
          {label: 'From Template: nzbPopoverContent', routerLink: '/popovers', fragment: 'options-content-template'},

        ]},
        { label: 'Other Popover Options', routerLink: '/popovers', fragment: 'options-other'},
      ]},
      { label: 'Methods', routerLink: '/popovers', fragment: 'methods', children: [
        {label: 'show(), hide() and toggle()', routerLink: '/popovers', fragment: 'show-hide-toggle'},
        {label: 'enable(), disable() and toggleEnabled()', routerLink: '/popovers', fragment: 'enable-disable'},
        {label: 'update()', routerLink: '/popovers', fragment: 'update'},

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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { MomentModule } from 'angular2-moment';
import {HttpClientModule} from '@angular/common/http';

import { NzbModule } from 'nowzoo-angular-bootstrap-lite';
import { NzbDevModule } from './nzb-dev/nzb-dev.module';


import { GistService } from './gist.service';

import { AppComponent } from './app.component';


import { GistEmbedComponent } from './gist-embed/gist-embed.component';

import { HomeComponent } from './home/home.component';


import { ModalsComponent } from './modals/modals.component';
import { ModalDemoShowComponent } from './modals/modal-demo-show/modal-demo-show.component';
import { ModalDemoFixedComponent } from './modals/modal-demo-fixed/modal-demo-fixed.component';
import { ModalDemoHideAutomaticallyComponent } from './modals/modal-demo-hide-automatically/modal-demo-hide-automatically.component';
import { ModalDemoAnimationComponent } from './modals/modal-demo-animation/modal-demo-animation.component';
import { ModalDemoBackdropComponent } from './modals/modal-demo-backdrop/modal-demo-backdrop.component';
import { ModalDemoKeyboardComponent } from './modals/modal-demo-keyboard/modal-demo-keyboard.component';
import { ModalDemoFocusComponent } from './modals/modal-demo-focus/modal-demo-focus.component';
import { ModalDemoSizeComponent } from './modals/modal-demo-size/modal-demo-size.component';
import { ModalDemoPromisesComponent } from './modals/modal-demo-promises/modal-demo-promises.component';
import { ModalDemoDynamicHeightComponent } from './modals/modal-demo-dynamic-height/modal-demo-dynamic-height.component';

import { TooltipsComponent } from './tooltips/tooltips.component';
import { TooltipDemo1Component } from './tooltips/tooltip-demo-1/tooltip-demo-1.component';
import { TooltipDemo0Component } from './tooltips/tooltip-demo-0/tooltip-demo-0.component';
import { TooltipDemo2Component } from './tooltips/tooltip-demo-2/tooltip-demo-2.component';
import { TooltipDemo3Component } from './tooltips/tooltip-demo-3/tooltip-demo-3.component';
import { TooltipDemo4Component } from './tooltips/tooltip-demo-4/tooltip-demo-4.component';
import { TooltipDemo5Component } from './tooltips/tooltip-demo-5/tooltip-demo-5.component';
import { TooltipDemo6Component } from './tooltips/tooltip-demo-6/tooltip-demo-6.component';
import { TooltipDemo7Component } from './tooltips/tooltip-demo-7/tooltip-demo-7.component';
import { PopoversComponent } from './popovers/popovers.component';
import { PopoverDemoGetInstanceComponent } from './popovers/popover-demo-get-instance/popover-demo-get-instance.component';
import { PermalinkedDirective } from './header/permalinked.directive';
import { PopoverDemoDisableComponent } from './popovers/popover-demo-disable/popover-demo-disable.component';
import { PopoverDemoShowHideComponent } from './popovers/popover-demo-show-hide/popover-demo-show-hide.component';
import { PopoverDemoPlacementFuncComponent } from './popovers/popover-demo-placement-func/popover-demo-placement-func.component';
import { PopoverDemoTemplatesComponent } from './popovers/popover-demo-templates/popover-demo-templates.component';
import { PopoverDemoAttributesComponent } from './popovers/popover-demo-attributes/popover-demo-attributes.component';
import { PopoverDemoAddClassComponent } from './popovers/popover-demo-add-class/popover-demo-add-class.component';
import { PopoverDemoDismissOnClickOutsideComponent } from './popovers/popover-demo-dismiss-on-click-outside/popover-demo-dismiss-on-click-outside.component';
import { PopoverDemoHideOnRouteChangeComponent } from './popovers/popover-demo-hide-on-route-change/popover-demo-hide-on-route-change.component';
import { PopoverPageHideOnRouteChangeComponent } from './popovers/popover-demo-hide-on-route-change/popover-page-hide-on-route-change.component';
import { PopoverDemoNoTitleComponent } from './popovers/popover-demo-no-title/popover-demo-no-title.component';

const routes = [
  {
    path: 'modals',
    children: [
      {path: 'demo-dynamic-height', component: ModalDemoDynamicHeightComponent},
      {path: 'demo-show', component: ModalDemoShowComponent},
      {path: 'demo-fixed', component: ModalDemoFixedComponent},
      {path: 'demo-goes-away-nicely', component: ModalDemoHideAutomaticallyComponent},
      {path: 'demo-animation', component: ModalDemoAnimationComponent},
      {path: 'demo-backdrop', component: ModalDemoBackdropComponent},
      {path: 'demo-keyboard', component: ModalDemoKeyboardComponent},
      {path: 'demo-focus', component: ModalDemoFocusComponent},
      {path: 'demo-size', component: ModalDemoSizeComponent},
      {path: 'demo-promises', component: ModalDemoPromisesComponent},
      {path: '', component: ModalsComponent}
    ]
  },

  {
    path: 'tooltips',

    children: [
      {path: '', component: TooltipsComponent}
    ]
  },

  {
    path: 'popovers',
    data: {gistId: '5afd85ea5ae5731112130269a4c5772c'},
    resolve: {gistFiles: GistService},
    children: [
      {path: 'go-away-nicely', component: PopoverPageHideOnRouteChangeComponent},
      {path: '', component: PopoversComponent}
    ]
  },




  {path: '', component: HomeComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    GistEmbedComponent,



    HomeComponent,

    ModalDemoShowComponent,
    ModalDemoFixedComponent,
    ModalsComponent,
    ModalDemoHideAutomaticallyComponent,
    ModalDemoAnimationComponent,
    ModalDemoBackdropComponent,
    ModalDemoKeyboardComponent,
    ModalDemoFocusComponent,
    ModalDemoSizeComponent,
    ModalDemoPromisesComponent,
    ModalDemoDynamicHeightComponent,

    TooltipsComponent,
    TooltipDemo1Component,
    TooltipDemo0Component,
    TooltipDemo2Component,
    TooltipDemo3Component,
    TooltipDemo4Component,
    TooltipDemo5Component,
    TooltipDemo6Component,
    TooltipDemo7Component,
    PopoversComponent,
    PopoverDemoGetInstanceComponent,
    PermalinkedDirective,
    PopoverDemoDisableComponent,
    PopoverDemoShowHideComponent,
    PopoverDemoPlacementFuncComponent,
    PopoverDemoTemplatesComponent,
    PopoverDemoAttributesComponent,
    PopoverDemoAddClassComponent,
    PopoverDemoDismissOnClickOutsideComponent,
    PopoverDemoHideOnRouteChangeComponent,
    PopoverPageHideOnRouteChangeComponent,
    PopoverDemoNoTitleComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MomentModule,
    NzbDevModule,
    NzbModule,
    RouterModule.forRoot(routes),
    MarkdownToHtmlModule.forRoot()
  ],
  providers: [ GistService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

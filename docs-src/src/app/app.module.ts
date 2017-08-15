import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { MomentModule } from 'angular2-moment';
import { NzbModule } from 'nowzoo-angular-bootstrap-lite';


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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MomentModule,
    NzbModule,
    RouterModule.forRoot(routes),
    MarkdownToHtmlModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

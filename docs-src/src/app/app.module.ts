import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { MomentModule } from 'angular2-moment';
import { HttpClientModule } from '@angular/common/http';

import { NzbModule, NzbPopoverOptions } from 'nowzoo-angular-bootstrap-lite';
import { NzbDevModule } from './nzb-dev/nzb-dev.module';


import { GistService } from './gist.service';

import { AppComponent } from './app.component';

import { PermalinkedDirective } from './header/permalinked.directive';

import { GistEmbedComponent } from './gist-embed/gist-embed.component';



import { HomeComponent } from './home/home.component';







import { TooltipsComponent } from './tooltips/tooltips.component';
import { TooltipDemoGetInstanceComponent } from './tooltips/tooltip-demo-get-instance/tooltip-demo-get-instance.component';
import { TooltipDemoDisableComponent } from './tooltips/tooltip-demo-disable/tooltip-demo-disable.component';
import { TooltipDemoShowHideComponent } from './tooltips/tooltip-demo-show-hide/tooltip-demo-show-hide.component';
import { TooltipDemoPlacementFuncComponent } from './tooltips/tooltip-demo-placement-func/tooltip-demo-placement-func.component';
import { TooltipDemoTemplatesComponent } from './tooltips/tooltip-demo-templates/tooltip-demo-templates.component';
import { TooltipDemoAttributesComponent } from './tooltips/tooltip-demo-attributes/tooltip-demo-attributes.component';
import { TooltipDemoAddClassComponent } from './tooltips/tooltip-demo-add-class/tooltip-demo-add-class.component';
import { TooltipDemoHideOnRouteChangeComponent } from './tooltips/tooltip-demo-hide-on-route-change/tooltip-demo-hide-on-route-change.component';
import { TooltipPageHideOnRouteChangeComponent } from './tooltips/tooltip-demo-hide-on-route-change/tooltip-page-hide-on-route-change.component';


import { ModalsComponent } from './modals/modals.component';

import { SideNavItemComponent } from './side-nav/side-nav-item.component';
import { PopoverQuickstartComponent } from './popovers/quickstart/popover-quickstart.component';
import { PopoverQuickstartDemoComponent } from './popovers/quickstart/popover-quickstart-demo.component';



import { PopoverUpdateComponent } from './popovers/methods/update/popover-update.component';
import { CodeHighlightComponent } from './code-highlight/code-highlight.component';
import { CodeHighlightDirective } from './code-highlight.directive';


import { ModalQuickstartComponent } from './modals/quickstart/modal-quickstart.component';
import { ModalQuickstartDemoComponent } from './modals/quickstart/modal-quickstart-demo.component';
import { ModalOverviewComponent } from './modals/overview/modal-overview.component';
import { ModalApiComponent } from './modals/api/modal-api.component';
import { ModalApiShowComponent } from './modals/api/show/modal-api-show.component';
import { ModalApiShowDemoComponent } from './modals/api/show/modal-api-show-demo.component';
import { ModalApiHideComponent } from './modals/api/hide/modal-api-hide.component';
import { ModalApiHideDemoComponent } from './modals/api/hide/modal-api-hide-demo.component';
import { ModalApiHandleUpdateComponent } from './modals/api/handle-update/modal-api-handle-update.component';
import { ModalApiHandleUpdateDemoComponent } from './modals/api/handle-update/modal-api-handle-update-demo.component';
import { ModalApiToggleComponent } from './modals/api/toggle/modal-api-toggle.component';
import { ModalApiToggleDemoComponent } from './modals/api/toggle/modal-api-toggle-demo.component';
import { ModalApiEventsComponent } from './modals/api/events/modal-api-events.component';
import { ModalApiEventsDemoComponent } from './modals/api/events/modal-api-events-demo.component';
import { ModalApiStatusComponent } from './modals/api/status/modal-api-status.component';
import { ModalApiStatusDemoComponent } from './modals/api/status/modal-api-status-demo.component';
import { ModalOptionsComponent } from './modals/options/modal-options.component';
import { ModalOptionsAnimationComponent } from './modals/options/animation/modal-options-animation.component';
import { ModalOptionsAnimationDemoComponent } from './modals/options/animation/modal-options-animation-demo.component';
import { ModalOptionsSizeComponent } from './modals/options/size/modal-options-size.component';
import { ModalOptionsSizeDemoComponent } from './modals/options/size/modal-options-size-demo.component';
import { ModalOptionsFocusComponent } from './modals/options/focus/modal-options-focus.component';
import { ModalOptionsFocusDemoComponent } from './modals/options/focus/modal-options-focus-demo.component';
import { ModalOptionsKeyboardComponent } from './modals/options/keyboard/modal-options-keyboard.component';
import { ModalOptionsKeyboardDemoComponent } from './modals/options/keyboard/modal-options-keyboard-demo.component';
import { ModalOptionsBackdropComponent } from './modals/options/backdrop/modal-options-backdrop.component';
import { ModalOptionsBackdropDemoComponent } from './modals/options/backdrop/modal-options-backdrop-demo.component';
import { ModalOptionsShowComponent } from './modals/options/show/modal-options-show.component';
import { ModalOptionsShowDemoComponent } from './modals/options/show/modal-options-show-demo.component';
import { ModalExamplesComponent } from './modals/examples/modal-examples.component';
import { ModalExampleGoAwayComponent } from './modals/examples/modal-example-go-away/modal-example-go-away.component';
import { ModalExampleGoAwayDemoComponent } from './modals/examples/modal-example-go-away/modal-example-go-away-demo.component';
import { ModalExampleGoAwayRouteComponent } from './modals/examples/modal-example-go-away/modal-example-go-away-route.component';
import { ModalExampleUserInputComponent } from './modals/examples/modal-example-user-input/modal-example-user-input.component';
import { ModalExampleUserInputDemoComponent } from './modals/examples/modal-example-user-input/modal-example-user-input-demo.component';
import { ModalExampleYoutubeComponent } from './modals/examples/modal-example-youtube/modal-example-youtube.component';
import { ModalExampleYoutubeDemoComponent } from './modals/examples/modal-example-youtube/modal-example-youtube-demo.component';
import { ModalExampleWrappingComponentComponent } from './modals/examples/modal-example-wrapping-component/modal-example-wrapping-component.component';
import { ModalExampleWrappingComponentDemoComponent } from './modals/examples/modal-example-wrapping-component/modal-example-wrapping-component-demo.component';
import { ModalExampleWrappedComponentDemoComponent } from './modals/examples/modal-example-wrapping-component/modal-example-wrapped-component-demo.component';
import { PopoverQuickstartSimpleDemoComponent } from './popovers/quickstart/popover-quickstart-simple-demo.component';
import { PopoverShowHideToggleDemoComponent } from './popovers/methods/show-hide-toggle/popover-show-hide-toggle-demo.component';
import { PopoverShowHideToggleComponent } from './popovers/methods/show-hide-toggle/popover-show-hide-toggle.component';
import { PopoverMethodsComponent } from './popovers/methods/popover-methods.component';
import { PopoverUpdateDemoComponent } from './popovers/methods/update/popover-update-demo.component';
import { PopoverEnableDisableComponent } from './popovers/methods/enable-disable/popover-enable-disable.component';
import { PopoverEnableDisableDemoComponent } from './popovers/methods/enable-disable/popover-enable-disable-demo.component';


import { PopoversComponent } from './popovers/popovers.component';
import { PopoverOptionsComponent } from './popovers/options/popover-options.component';
import { PopoverTitleComponent } from './popovers/options/title/popover-title.component';
import { PopoverContentComponent } from './popovers/options/content/popover-content.component';
import { PopoverOtherOptionsComponent } from './popovers/options/other/popover-other-options.component';
import { PopoverTitleAttributesComponent } from './popovers/options/title/attributes/popover-title-attributes.component';
import { PopoverTitleAttributesDemoComponent } from './popovers/options/title/attributes/popover-title-attributes-demo.component';
import { PopoverTitleTemplateComponent } from './popovers/options/title/template/popover-title-template.component';
import { PopoverTitleTemplateDemoComponent } from './popovers/options/title/template/popover-title-template-demo.component';
import { PopoverContentTemplateDemoComponent } from './popovers/options/content/template/popover-content-template-demo.component';
import { PopoverContentTemplateComponent } from './popovers/options/content/template/popover-content-template.component';
import { PopoverContentAttributeComponent } from './popovers/options/content/attribute/popover-content-attribute.component';
import { PopoverContentAttributeDemoComponent } from './popovers/options/content/attribute/popover-content-attribute-demo.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertDemoComponent } from './alerts/alert-demo.component';

const routes = [
  {
    path: 'modals',
    data: {gistId: '9a7fa3f1128dff5f353edf209ed07e35'},
    //resolve: {gistFiles: GistService},
    children: [
      {path: 'go-away', component: ModalExampleGoAwayRouteComponent},
      {path: 'immediately', component: ModalOptionsShowDemoComponent},
      {path: '', component: ModalsComponent}
    ]
  },

  {
    path: 'tooltips',
    data: {gistId: 'a093f7f69144b5380ac7be766f0bd7ef'},
    //resolve: {gistFiles: GistService},
    children: [
      {path: 'go-away-nicely', component: TooltipPageHideOnRouteChangeComponent},
      {path: '', component: TooltipsComponent}
    ]
  },

  {
    path: 'popovers',
    data: {gistId: '5afd85ea5ae5731112130269a4c5772c'},
    //resolve: {gistFiles: GistService},
    children: [
      {path: '', component: PopoversComponent}
    ]
  },

  {
    path: 'alerts',
    //resolve: {gistFiles: GistService},
    children: [
      {path: '', component: AlertsComponent}
    ]
  },




  {path: '', component: HomeComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    GistEmbedComponent,
    PermalinkedDirective,


    HomeComponent,






    TooltipsComponent,
    TooltipDemoGetInstanceComponent,
    TooltipDemoDisableComponent,
    TooltipDemoShowHideComponent,
    TooltipDemoPlacementFuncComponent,
    TooltipDemoTemplatesComponent,
    TooltipDemoAttributesComponent,
    TooltipDemoAddClassComponent,
    TooltipDemoHideOnRouteChangeComponent,
    TooltipPageHideOnRouteChangeComponent,

    ModalsComponent,
    ModalQuickstartDemoComponent,


    SideNavItemComponent,
    PopoverQuickstartComponent,
    PopoverQuickstartDemoComponent,



    PopoversComponent,


    PopoverUpdateComponent,
    CodeHighlightComponent,
    CodeHighlightDirective,
    ModalQuickstartComponent,
    ModalOverviewComponent,
    ModalApiComponent,
    ModalApiShowComponent,
    ModalApiShowDemoComponent,
    ModalApiHideComponent,
    ModalApiHideDemoComponent,
    ModalApiToggleComponent,
    ModalApiToggleDemoComponent,
    ModalApiHandleUpdateComponent,
    ModalApiHandleUpdateDemoComponent,
    ModalApiEventsComponent,
    ModalApiEventsDemoComponent,
    ModalApiStatusComponent,
    ModalApiStatusDemoComponent,
    ModalOptionsComponent,
    ModalOptionsAnimationComponent,
    ModalOptionsAnimationDemoComponent,
    ModalOptionsSizeComponent,
    ModalOptionsSizeDemoComponent,
    ModalOptionsFocusComponent,
    ModalOptionsFocusDemoComponent,
    ModalOptionsKeyboardComponent,
    ModalOptionsKeyboardDemoComponent,
    ModalOptionsBackdropComponent,
    ModalOptionsBackdropDemoComponent,
    ModalOptionsShowComponent,
    ModalOptionsShowDemoComponent,
    ModalExamplesComponent,
    ModalExampleGoAwayComponent,
    ModalExampleGoAwayDemoComponent,
    ModalExampleGoAwayRouteComponent,
    ModalExampleUserInputComponent,
    ModalExampleUserInputDemoComponent,
    ModalExampleYoutubeComponent,
    ModalExampleYoutubeDemoComponent,
    ModalExampleWrappingComponentComponent,
    ModalExampleWrappingComponentDemoComponent,
    ModalExampleWrappedComponentDemoComponent,
    PopoverQuickstartSimpleDemoComponent,
    PopoverShowHideToggleDemoComponent,
    PopoverShowHideToggleComponent,
    PopoverMethodsComponent,
    PopoverUpdateDemoComponent,
    PopoverEnableDisableComponent,
    PopoverEnableDisableDemoComponent,
    PopoverOptionsComponent,
    PopoverTitleComponent,
    PopoverContentComponent,
    PopoverOtherOptionsComponent,
    PopoverTitleAttributesComponent,
    PopoverTitleAttributesDemoComponent,
    PopoverTitleTemplateComponent,
    PopoverTitleTemplateDemoComponent,
    PopoverContentTemplateDemoComponent,
    PopoverContentTemplateComponent,
    PopoverContentAttributeComponent,
    PopoverContentAttributeDemoComponent,
    AlertsComponent,
    AlertDemoComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MomentModule,
    NzbDevModule,
    NzbModule,
    RouterModule.forRoot(routes),
    MarkdownToHtmlModule.forRoot(),

  ],
  exports: [],
  providers: [ GistService, {provide: NzbPopoverOptions, useValue: {placement: 'auto'}} ],
  bootstrap: [AppComponent]
})
export class AppModule { }

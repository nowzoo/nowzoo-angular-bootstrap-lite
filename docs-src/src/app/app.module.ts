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




import { PopoversComponent } from './popovers/popovers.component';
import { PopoverDemoGetInstanceComponent } from './popovers/popover-demo-get-instance/popover-demo-get-instance.component';
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

import { ModalDemoShowOnInstantiationComponent } from './modals/modal-demo-show-on-instantiation/modal-demo-show-on-instantiation.component';
import { ModalDemoShowOnInstantiationChildComponent } from './modals/modal-demo-show-on-instantiation/modal-demo-show-on-instantiation-child.component';
import { ModalDemoGoesAwayNicelyComponent } from './modals/modal-demo-goes-away-nicely/modal-demo-goes-away-nicely.component';
import { ModalDemoGoesAwayAnotherRouteComponent } from './modals/modal-demo-goes-away-nicely/modal-demo-goes-away-another-route.component';
import { SideNavItemComponent } from './side-nav/side-nav-item.component';
import { PopoverQuickstartComponent } from './popovers/popover-quickstart/popover-quickstart.component';
import { PopoverQuickstartDemoComponent } from './popovers/popover-quickstart/popover-quickstart-demo.component';


import { PopoverTitleComponent } from './popovers/popover-title/popover-title.component';
import { PopoverTitleDemoComponent } from './popovers/popover-title/popover-title-demo.component';
import { PopoverContentComponent } from './popovers/popover-content/popover-content.component';
import { PopoverContentDemoComponent } from './popovers/popover-content/popover-content-demo.component';
import { PopoverOptionsComponent } from './popovers/popover-options/popover-options.component';
import { PopoverOptionsProviderComponent } from './popovers/popover-options-provider/popover-options-provider.component';
import { PopoverAnimationComponent } from './popovers/popover-animation/popover-animation.component';
import { PopoverAnimationDemoComponent } from './popovers/popover-animation/popover-animation-demo.component';

import { PopoverContainerComponent } from './popovers/popover-container/popover-container.component';
import { PopoverContainerDemoComponent } from './popovers/popover-container/popover-container-demo.component';
import { PopoverDelayComponent } from './popovers/popover-delay/popover-delay.component';
import { PopoverDelayDemoComponent } from './popovers/popover-delay/popover-delay-demo.component';
import { PopoverHtmlComponent } from './popovers/popover-html/popover-html.component';
import { PopoverHtmlDemoComponent } from './popovers/popover-html/popover-html-demo/popover-html-demo.component';
import { PopoverPlacementComponent } from './popovers/popover-placement/popover-placement.component';
import { PopoverPlacementDemoComponent } from './popovers/popover-placement/popover-placement-demo/popover-placement-demo.component';
import { PopoverTemplateComponent } from './popovers/popover-template/popover-template.component';
import { PopoverTemplateDemoComponent } from './popovers/popover-template/popover-template-demo/popover-template-demo.component';
import { PopoverTriggerComponent } from './popovers/popover-trigger/popover-trigger.component';
import { PopoverTriggerDemoComponent } from './popovers/popover-trigger/popover-trigger-demo/popover-trigger-demo.component';
import { PopoverOffsetComponent } from './popovers/popover-offset/popover-offset.component';
import { PopoverOffsetDemoComponent } from './popovers/popover-offset/popover-offset-demo/popover-offset-demo.component';
import { PopoverFallbackPlacementComponent } from './popovers/popover-fallback-placement/popover-fallback-placement.component';
import { PopoverFallbackPlacementDemoComponent } from './popovers/popover-fallback-placement/popover-fallback-placement-demo/popover-fallback-placement-demo.component';
import { PopoverAnimateOnDestroyComponent } from './popovers/popover-animate-on-destroy/popover-animate-on-destroy.component';
import { PopoverAnimateOnDestroyDemoComponent } from './popovers/popover-animate-on-destroy/popover-animate-on-destroy-demo/popover-animate-on-destroy-demo.component';
import { PopoverApiComponent } from './popovers/popover-api/popover-api.component';
import { PopoverInputsComponent } from './popovers/popover-inputs/popover-inputs.component';
import { PopoverMethodsComponent } from './popovers/popover-methods/popover-methods.component';
import { PopoverShowComponent } from './popovers/popover-show/popover-show.component';
import { PopoverHideComponent } from './popovers/popover-hide/popover-hide.component';
import { PopoverToggleComponent } from './popovers/popover-toggle/popover-toggle.component';
import { PopoverUpdateComponent } from './popovers/popover-update/popover-update.component';
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



const routes = [
  {
    path: 'modals',
    data: {gistId: '9a7fa3f1128dff5f353edf209ed07e35'},
    //resolve: {gistFiles: GistService},
    children: [
      {path: 'go-away-nicely', component: ModalDemoGoesAwayAnotherRouteComponent},
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
    PermalinkedDirective,


    HomeComponent,





    PopoverDemoGetInstanceComponent,
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

    ModalDemoShowOnInstantiationComponent,
    ModalDemoShowOnInstantiationChildComponent,
    ModalDemoGoesAwayNicelyComponent,
    ModalDemoGoesAwayAnotherRouteComponent,
    SideNavItemComponent,
    PopoverQuickstartComponent,
    PopoverQuickstartDemoComponent,



    PopoversComponent,
    PopoverTitleComponent,
    PopoverTitleDemoComponent,
    PopoverContentComponent,
    PopoverContentDemoComponent,
    PopoverOptionsComponent,
    PopoverOptionsProviderComponent,
    PopoverAnimationComponent,
    PopoverAnimationDemoComponent,
    PopoverContainerComponent,
    PopoverContainerDemoComponent,
    PopoverDelayComponent,
    PopoverDelayDemoComponent,
    PopoverHtmlComponent,
    PopoverHtmlDemoComponent,
    PopoverPlacementComponent,
    PopoverPlacementDemoComponent,
    PopoverTemplateComponent,
    PopoverTemplateDemoComponent,
    PopoverTriggerComponent,
    PopoverTriggerDemoComponent,
    PopoverOffsetComponent,
    PopoverOffsetDemoComponent,
    PopoverFallbackPlacementComponent,
    PopoverFallbackPlacementDemoComponent,
    PopoverAnimateOnDestroyComponent,
    PopoverAnimateOnDestroyDemoComponent,
    PopoverApiComponent,
    PopoverInputsComponent,
    PopoverMethodsComponent,
    PopoverShowComponent,
    PopoverHideComponent,
    PopoverToggleComponent,
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

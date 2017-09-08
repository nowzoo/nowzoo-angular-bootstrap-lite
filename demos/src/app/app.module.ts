import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { NzbModule } from 'nowzoo-angular-bootstrap-lite';


import { AppComponent } from './app.component';
import { AlertsComponent } from './alerts/alerts.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { CollapseComponent } from './collapse/collapse.component';
import { PopoversComponent } from './popovers/popovers.component';
import { PopoverObservablesComponent } from './popovers/popover-observables.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { TooltipObservablesComponent } from './tooltips/tooltip-observables.component';
import { ModalsComponent } from './modals/modals.component';
import { ModalObservablesComponent } from './modals/modal-observables.component';
import { ModalsGoAwayNicelyComponent } from './modals/modals-go-away-nicely.component';
import { ModalOpenedImmediatelyComponent } from './modals/modal-opened-immediately.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsObservablesComponent } from './tabs/tabs-observables.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { DropdownObservablesComponent } from './dropdowns/dropdown-observables.component';
import { HomeComponent } from './home/home.component';
import { AlertObservablesComponent } from './alerts/alert-observables.component';

const routes = [
  { path: 'alerts', data: {title: 'Alerts'}, component: AlertsComponent},
  { path: 'carousels', data: {title: 'Carousels'}, component: CarouselsComponent},
  { path: 'collapse', data: {title: 'Collapse'}, component: CollapseComponent},
  { path: 'modals', data: {title: 'Modals'}, component: ModalsComponent},
  { path: 'modals-go-away-nicely', data: {title: 'Modals Go Away Nicely'}, component: ModalsGoAwayNicelyComponent},
  { path: 'modal-opened-immediately', data: {title: 'Modal Opened Immediately'}, component: ModalOpenedImmediatelyComponent},
  { path: 'popovers', data: {title: 'Popovers'}, component: PopoversComponent},
  { path: 'tabs', data: {title: 'Tabs'}, component: TabsComponent},
  { path: 'dropdowns', data: {title: 'Dropdowns'}, component: DropdownsComponent},
  { path: 'tooltips', data: {title: 'Tooltips'}, component: TooltipsComponent},
  { path: '', data: {title: null}, component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    CarouselsComponent,
    CollapseComponent,
    PopoversComponent,
    PopoverObservablesComponent,
    TooltipsComponent,
    TooltipObservablesComponent,
    ModalsComponent,
    ModalObservablesComponent,
    ModalsGoAwayNicelyComponent,
    ModalOpenedImmediatelyComponent,
    TabsComponent,
    TabsObservablesComponent,
    DropdownsComponent,
    DropdownObservablesComponent,
    HomeComponent,
    AlertObservablesComponent
  ],
  imports: [
    BrowserModule,
    MomentModule,
    NzbModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

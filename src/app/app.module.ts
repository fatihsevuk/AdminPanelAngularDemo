import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material';
import {
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdListModule,
  MdSortModule,
  MatDatepickerModule,
  MatInputModule,
  MdTableModule,
  MdPaginatorModule,
  MdNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatCardModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MdAutocompleteModule,
  MdButtonToggleModule,
  MdChipsModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdInputModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdTooltipModule,
  MdStepperModule,
  MatExpansionModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DatatableComponent } from './datatable/datatable.component';

import { CelandarComponent } from './celandar/celandar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GraphicComponent } from './graphic/graphic.component';
import { FormComponent } from './form/form.component';
import { routing } from "app/app.router";
import 'hammerjs';
import { FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { TooltipComponent } from "app/tooltip/tooltip.component";
import { RaportComponent } from './raport/raport.component';
import { PopupPanelComponent } from './popup-panel/popup-panel.component';
import { BeaconComponent } from './beacon/beacon.component';
import { LocationComponent } from './location/location.component';
import { BeaconLocationComponent } from './beacon-location/beacon-location.component';
import { EmployeeComponent } from './employee/employee.component';
import { PositionComponent } from './position/position.component';
import { LocationChiefComponent } from './location-chief/location-chief.component';
import { PicklistComponent } from './picklist/picklist.component';
import {PickListModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ToolbarComponent,
    DatatableComponent,
    TooltipComponent,
    DropdownComponent,
    GraphicComponent,
    FormComponent,
    CelandarComponent,
    RaportComponent,
    PopupPanelComponent,
    BeaconComponent,
    LocationComponent,
    BeaconLocationComponent,
    EmployeeComponent,
    PositionComponent,
    LocationChiefComponent,
    PicklistComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdTableModule,
    MdPaginatorModule,
    MdSortModule,
    MatDatepickerModule,
    MdNativeDateModule, MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
    MatCheckboxModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MatExpansionModule,
    MdExpansionModule,
    MdChipsModule,
    PickListModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdStepperModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

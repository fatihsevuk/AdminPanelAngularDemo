import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DatatableComponent } from "app/datatable/datatable.component";
import { CelandarComponent } from "app/celandar/celandar.component";
import { FormComponent } from "app/form/form.component";
import { DropdownComponent } from "app/dropdown/dropdown.component";
import { GraphicComponent } from "app/graphic/graphic.component";
import { TooltipComponent } from "app/tooltip/tooltip.component";
import { RaportComponent } from "app/raport/raport.component";
import { BeaconComponent } from "app/beacon/beacon.component";
import { BeaconLocationComponent } from "app/beacon-location/beacon-location.component";
import { EmployeeComponent } from "app/employee/employee.component";
import { PositionComponent } from "app/position/position.component";
import { LocationChiefComponent } from "app/location-chief/location-chief.component";
import { PicklistComponent } from "app/picklist/picklist.component";


const appRoutes: Routes = [
    


    {
        path:"datatable",
        component:DatatableComponent
    },

    {
        path:"celandar",
        component:CelandarComponent
    },

    {
        path:"form",
        component:FormComponent
    },

    {
        path:"dropdown",
        component:DropdownComponent
    },

    {
        path:"graphic",
        component:GraphicComponent
    },

    {
        path:"tooltip",
        component:TooltipComponent
    },

    {
        path:"report",
        component:RaportComponent
    },

    {
        path:"beacon",
        component:BeaconComponent
    },

     {
        path:"location",
        component:BeaconComponent
    },


    {
        path:"beacon-location",
        component:BeaconLocationComponent
    },

    {
        path:"employee",
        component:EmployeeComponent
    },

    {
        path:"position",
        component:PositionComponent
    },

    {
        path:"location-chief",
        component:LocationChiefComponent
    },

     {
        path:"picklist",
        component:PicklistComponent
    }




    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
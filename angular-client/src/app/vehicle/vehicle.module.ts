import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AddVehiclePageComponent} from "./add-vehicle-page/add-vehicle-page.component";

@NgModule({
    imports: [
        RouterModule.forChild([{path: 'add', component: AddVehiclePageComponent}]),
    ],
    exports: [
    ],
    declarations: [
        AddVehiclePageComponent
    ]
})
export class VehicleModule {}
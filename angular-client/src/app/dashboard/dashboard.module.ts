import {NgModule} from "@angular/core";
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule} from "@angular/material";
import {DashboardPageComponent} from "./dashboard-page/dashboard-page.component";
import {RouterModule} from "@angular/router";
import {GridModule} from "../shared/grid/grid.module";
import {
    UserVehicleCardComponent, UserVehicleCardNameComponent, UserVehicleCardDetailsComponent,
    UserVehicleCardMileageComponent
} from "./user-vehicle-card/user-vehicle-card.component";
import {NewUserVehicleCardComponent} from "./new-user-vehicle-card/new-user-vehicle-card.component";

@NgModule({
    imports: [
        MatCardModule,
        MatGridListModule,
        GridModule,
        MatButtonModule,
        MatIconModule,
        RouterModule.forChild([{path: 'dashboard', component: DashboardPageComponent}]),
    ],
    exports: [
        DashboardPageComponent
    ],
    declarations: [
        DashboardPageComponent,
        UserVehicleCardComponent,
        UserVehicleCardNameComponent,
        UserVehicleCardDetailsComponent,
        UserVehicleCardMileageComponent,
        NewUserVehicleCardComponent,
    ]
})
export class DashboardModule {}
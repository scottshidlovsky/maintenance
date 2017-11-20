import {NgModule} from "@angular/core";
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule} from "@angular/material";
import {DashboardPageComponent} from "./dashboard-page/dashboard-page.component";
import {RouterModule} from "@angular/router";
import {GridModule} from "../shared/grid/grid.module";

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
        DashboardPageComponent
    ]
})
export class DashboardModule {}
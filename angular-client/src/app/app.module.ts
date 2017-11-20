import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatToolbarModule, MatButtonModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {AuthModule} from "./auth/auth.module";
import {StoreModule} from "@ngrx/store";
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {UserApi} from "./core/user.api";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "./core/core.effects";
import {AppBarComponent} from "./core/app-bar.component";
import {AppBarContainer} from "./core/app-bar.container";
import {DashboardModule} from "./dashboard/dashboard.module";
import {GridModule} from "./shared/grid/grid.module";
import {VehicleModule} from "./vehicle/vehicle.module";


@NgModule({
    declarations: [
        AppComponent,
        AppBarComponent,
        AppBarContainer
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule.forRoot([
            {path: 'vehicle', loadChildren: () => VehicleModule}
        ]),
        StoreModule.forRoot({ router: routerReducer }),

        AuthModule,
        DashboardModule,
        GridModule,

        StoreRouterConnectingModule,
        EffectsModule.forRoot([AppEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [UserApi],
    bootstrap: [AppComponent]
})
export class AppModule {
}

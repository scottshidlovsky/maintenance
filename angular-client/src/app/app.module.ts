import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { Params, RouterModule, RouterStateSnapshot } from '@angular/router';
import { UserModule } from './user/user.module';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { DashboardModule } from './dashboard/dashboard.module';
import { GridModule } from './shared/grid/grid.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { UserService } from './user/user.service';
import { AppBarComponentComponent } from './core/app-bar/app-bar-component.component';
import { AppBarComponent } from './core/app-bar/app-bar.component';
import { FormModule } from './form/form.module';
import { CoreModule } from './core/core.module';

interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url, root: { queryParams } } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ router: routerReducer }),

    DashboardModule,
    GridModule,
    UserModule,
    FormModule,
    CoreModule,

    StoreRouterConnectingModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Dev Tools',
      logOnly: environment.production
    })
  ],
  providers: [UserService, { provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}

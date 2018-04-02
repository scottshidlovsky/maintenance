import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { DashboardModule } from './dashboard/dashboard.module';
import { GridModule } from './shared/grid/grid.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { UserService } from './core/user.service';
import { CoreEffects } from './core/+state/core.effects';
import { AppBarComponentComponent } from './core/app-bar/app-bar-component.component';
import { AppBarComponent } from './core/app-bar/app-bar.component';

@NgModule({
  declarations: [AppComponent, AppBarComponentComponent, AppBarComponent],
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
    AuthModule,

    StoreRouterConnectingModule,
    EffectsModule.forRoot([CoreEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Dev Tools',
      logOnly: environment.production
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}

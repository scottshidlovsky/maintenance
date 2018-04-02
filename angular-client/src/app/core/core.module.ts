import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './+state/core.effects';
import { UserService } from './user.service';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppBarComponentComponent } from './app-bar/app-bar-component.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    EffectsModule.forFeature([CoreEffects]),
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  declarations: [
    AppBarComponent,
    AppBarComponentComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    AppBarComponent
  ]
})
export class CoreModule {}
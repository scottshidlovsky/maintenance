import { NgModule } from '@angular/core';
import { FacebookBtnComponent } from './facebook-btn/facebook-btn.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './+state/user.reducer';
import { LoginComponent } from './login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './+state/user.effects';
import { UserService } from './user.service';

@NgModule({
  imports: [StoreModule.forFeature('user', userReducer), EffectsModule.forFeature([UserEffects])],
  declarations: [LoginComponent, FacebookBtnComponent],
  exports: [LoginComponent],
  providers: [UserService]
})
export class UserModule {}

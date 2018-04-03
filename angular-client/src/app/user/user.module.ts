import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacebookBtnComponent } from './facebook-btn/facebook-btn.component';
import { StoreModule } from '@ngrx/store';
import { userReducer, State as UserState } from './+state/user.reducer';
import { LoginComponent } from './login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './+state/user.effects';
import { UserService } from './user.service';

export interface State {
  user: UserState;
}

const reducers = {
  user: userReducer
};

@NgModule({
  imports: [StoreModule.forFeature('user', reducers), EffectsModule.forFeature([UserEffects])],
  declarations: [LoginComponent, FacebookBtnComponent],
  exports: [LoginComponent],
  providers: [UserService]
})
export class UserModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacebookBtnComponent } from './facebook-btn/facebook-btn.component';
import { StoreModule } from '@ngrx/store';
import { userReducer, State as AuthState } from './+state/auth.reducer';
import { LoginComponent } from './login/login.component';

export interface State {
  user: AuthState;
}

const reducers = {
  user: userReducer
};

@NgModule({
  imports: [StoreModule.forFeature('auth', reducers)],
  declarations: [LoginComponent, FacebookBtnComponent],
  exports: [LoginComponent]
})
export class AuthModule {}

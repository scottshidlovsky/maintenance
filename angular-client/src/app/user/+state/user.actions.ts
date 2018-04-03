import { Action } from '@ngrx/store';
import { UserData } from '../user.service';

export enum UserActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success'
}

export class Login implements Action {
  readonly type = UserActionTypes.Login;
}

export class LoginSuccess implements Action {
  readonly type = UserActionTypes.LoginSuccess;
  constructor(public payload: UserData) {}
}

export type UserActions = Login | LoginSuccess;

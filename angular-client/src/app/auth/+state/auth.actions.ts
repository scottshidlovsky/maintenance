import { Action } from '@ngrx/store';
import { UserData } from '../../core/user.service';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';

export class Login implements Action {
  readonly type = LOGIN;
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: UserData) {}
}

export type All = Login | LoginSuccess;

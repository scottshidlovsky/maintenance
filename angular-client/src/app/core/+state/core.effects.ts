import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LOGIN, LoginSuccess } from '../../auth/+state/auth.actions';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { UserData, UserService } from '../user.service';

@Injectable()
export class CoreEffects {
  @Effect()
  getUserInfo$: Observable<Action> = this.actions$.pipe(
    ofType(LOGIN),
    mergeMap(() => {
      return this.userService.retrieveUserInfo();
    }),
    filter((results: UserData) => {
      return !!results.email;
    }),
    map((results: UserData) => {
      this.router.navigate(['dashboard']);
      return new LoginSuccess(results);
    })
  );

  constructor(private actions$: Actions, private userService: UserService, private router: Router) {}
}

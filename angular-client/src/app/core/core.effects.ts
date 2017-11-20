import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {UserApi, UserData} from "./user.api";
import {LOGIN, LoginSuccess} from "../auth/auth.actions";
import {filter, map, mergeMap, tap} from "rxjs/operators";
import {Action} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Injectable()
export class AppEffects {

    @Effect()
    getUserInfo$: Observable<Action> = this.actions$.ofType(LOGIN)
        .pipe(
            mergeMap(() => {
                return this.userApi.retrieveUserInfo()
            }),
            filter((results: UserData) => {
                return !!results.email;
            }),
            map((results: UserData) => {
                this.router.navigate(['dashboard']);
                return new LoginSuccess(results)
            })
        );

    constructor(private actions$: Actions,
                private userApi: UserApi,
                private router: Router) {
    }

}
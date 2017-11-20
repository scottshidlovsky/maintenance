import {Component} from "@angular/core";
import * as auth from '../auth';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {selectUser} from "../auth/auth.selectors";

@Component({
    selector: 'cm-app-bar',
    template: `
      <cm-app-bar-component [email]="(user$ | async).email"
                            [profileUrl]="(user$ | async).profileUrl"
                            [authenticated]="(user$ | async).authenticated">
      </cm-app-bar-component>
    `
})
export class AppBarContainer {

    user$: Observable<{ email: string, profileUrl: string, authenticated: boolean}>;

    constructor(store: Store<auth.State>) {
        this.user$ = store.select(selectUser);
    }
}
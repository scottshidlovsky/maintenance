import { Component } from '@angular/core';
import * as user from '../../user/index';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { selectUserFeature } from '../../user';

@Component({
  selector: 'cm-app-bar',
  template: `
      <cm-app-bar-component [email]="(user$ | async).email"
                            [profileUrl]="(user$ | async).profileUrl"
                            [authenticated]="(user$ | async).authenticated">
      </cm-app-bar-component>
    `
})
export class AppBarComponent {
  user$: Observable<{ email: string; profileUrl: string; authenticated: boolean }>;

  constructor(store: Store<user.State>) {
    this.user$ = store.pipe(select(selectUserFeature));
  }
}

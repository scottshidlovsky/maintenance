import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State as UserState } from './user/+state/user.reducer';
import { Login } from './user/+state/user.actions';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cm';
  constructor(private route: ActivatedRoute, private store: Store<UserState>) {
    this.route.queryParams
      .pipe(
        filter((params: Params) => {
          return !!params['login'];
        })
      )
      .subscribe(p => {
        this.store.dispatch(new Login());
      });
  }
}

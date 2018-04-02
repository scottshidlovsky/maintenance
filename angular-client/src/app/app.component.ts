import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State as AuthState } from './auth/+state/auth.reducer';
import { Login } from './auth/+state/auth.actions';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cm';
  constructor(private route: ActivatedRoute, private store: Store<AuthState>) {
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

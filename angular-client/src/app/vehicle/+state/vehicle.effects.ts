import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class VehicleEffects {
  @Effect()
  test$: Observable<Action> = this.actions$.ofType('TEST').pipe(
    mergeMap(action => {
      console.log('matched');
      return of({ type: 'TEST_A', payload: true });
    })
  );

  constructor(private actions$: Actions) {}
}

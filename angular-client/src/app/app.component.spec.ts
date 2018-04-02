import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';

const store = { dispatch: () => {} };
const params = new Subject();
const route = { queryParams: params };

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [{ provide: Store, useValue: store }, { provide: ActivatedRoute, useValue: route }]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});

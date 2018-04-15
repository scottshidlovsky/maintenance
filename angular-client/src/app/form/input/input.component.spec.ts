import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgControl, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, NoopAnimationsModule],
        declarations: [InputComponent],
        providers: [{ provide: NgControl, useValue: {} }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

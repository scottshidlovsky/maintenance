import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmFieldInputComponent } from './cm-field-input.component';

describe('CmFieldInputComponent', () => {
  let component: CmFieldInputComponent;
  let fixture: ComponentFixture<CmFieldInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmFieldInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmFieldInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

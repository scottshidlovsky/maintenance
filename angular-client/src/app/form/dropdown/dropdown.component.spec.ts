import { async, ComponentFixture, fakeAsync, flush, inject, TestBed } from '@angular/core/testing';

import { DropdownComponent, DropdownOptionComponent } from './dropdown.component';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'cm-dropdown-test',
  template: `
    <cm-dropdown [formControl]="control" required>
      <cm-dropdown-option value="test">Test</cm-dropdown-option>
      <cm-dropdown-option value="test1">Test1</cm-dropdown-option>
    </cm-dropdown>
  `
})
class DropdownTestComponent {
  control = new FormControl();
}

describe('DropdownComponent', () => {
  let component: DropdownTestComponent;
  let fixture: ComponentFixture<DropdownTestComponent>;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, ReactiveFormsModule, MatSelectModule],
        declarations: [DropdownTestComponent, DropdownComponent, DropdownOptionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    inject([OverlayContainer], (oc: OverlayContainer) => {
      overlayContainer = oc;
      overlayContainerElement = oc.getContainerElement();
    })();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(
    'should update form control when user changes',
    fakeAsync(() => {
      const trigger = fixture.debugElement.query(By.css('.mat-select-trigger')).nativeElement;
      trigger.click();
      fixture.detectChanges();
      flush();

      (overlayContainerElement.querySelector('mat-option') as HTMLElement).click();
      fixture.detectChanges();
      flush();
      expect(component.control.value).toBe('test');
      expect(component.control.touched).toBeTruthy();
    })
  );

  it(
    'should update ui when form control is set',
    fakeAsync(() => {
      component.control.setValue('test');
      fixture.detectChanges();
      flush();
      const trigger = fixture.debugElement.query(By.css('.mat-select-value')).nativeElement;
      expect(trigger.textContent).toContain('Test');
    })
  );

  it(
    'should propagate errors from internal control',
    fakeAsync(() => {
      component.control.setValue(null);
      fixture.detectChanges();
      flush();
      expect(component.control.hasError('required')).toBeTruthy();
    })
  );
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserVehicleCardComponent } from './user-vehicle-card.component';
import { By } from '@angular/platform-browser';


describe('UserVehicleCardComponent', () => {
  let component: UserVehicleCardComponent;
  let fixture: ComponentFixture<UserVehicleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVehicleCardComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVehicleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display name, details, and mileage', () => {
    component.mileage = 100;
    component.name = 'name';
    component.details = 'details';
    fixture.detectChanges();
    const name = fixture.debugElement.query(By.css('.vehicle-name'));
    const details = fixture.debugElement.query(By.css('.vehicle-details'));
    const mileage = fixture.debugElement.query(By.css('.vehicle-mileage'));
    expect(name.nativeElement.textContent).toContain('name');
    expect(details.nativeElement.textContent).toContain('details');
    expect(mileage.nativeElement.textContent).toContain('100 Miles');
  });

  it('should format mileage', () => {
    component.mileage = 1000;
    fixture.detectChanges();
    const mileage = fixture.debugElement.query(By.css('.vehicle-mileage'));
    expect(mileage.nativeElement.textContent).toContain('1,000 Miles');
  })


});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeupdateComponent } from './employeeupdate.component';

describe('EmployeeupdateComponent', () => {
  let component: EmployeeupdateComponent;
  let fixture: ComponentFixture<EmployeeupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeupdateComponent]
    });
    fixture = TestBed.createComponent(EmployeeupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

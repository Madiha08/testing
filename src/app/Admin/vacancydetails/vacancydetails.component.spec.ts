import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancydetailsComponent } from './vacancydetails.component';

describe('VacancydetailsComponent', () => {
  let component: VacancydetailsComponent;
  let fixture: ComponentFixture<VacancydetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacancydetailsComponent]
    });
    fixture = TestBed.createComponent(VacancydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurservicedetailsComponent } from './ourservicedetails.component';

describe('OurservicedetailsComponent', () => {
  let component: OurservicedetailsComponent;
  let fixture: ComponentFixture<OurservicedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurservicedetailsComponent]
    });
    fixture = TestBed.createComponent(OurservicedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

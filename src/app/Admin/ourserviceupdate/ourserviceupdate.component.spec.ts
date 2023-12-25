import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurserviceupdateComponent } from './ourserviceupdate.component';

describe('OurserviceupdateComponent', () => {
  let component: OurserviceupdateComponent;
  let fixture: ComponentFixture<OurserviceupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurserviceupdateComponent]
    });
    fixture = TestBed.createComponent(OurserviceupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

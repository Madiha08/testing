import { TestBed } from '@angular/core/testing';

import { OurservicessService } from './ourservicess.service';

describe('OurservicessService', () => {
  let service: OurservicessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurservicessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

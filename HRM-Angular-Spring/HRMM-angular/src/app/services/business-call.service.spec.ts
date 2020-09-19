import { TestBed } from '@angular/core/testing';

import { BusinessCallService } from './business-call.service';

describe('BusinessCallService', () => {
  let service: BusinessCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

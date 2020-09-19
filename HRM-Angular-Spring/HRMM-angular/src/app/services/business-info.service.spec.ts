import { TestBed } from '@angular/core/testing';

import { BusinessInfoService } from './business-info.service';

describe('BusinessInfoService', () => {
  let service: BusinessInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

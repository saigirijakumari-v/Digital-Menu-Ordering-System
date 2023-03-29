import { TestBed } from '@angular/core/testing';

import { FdserviceService } from './fdservice.service';

describe('FdserviceService', () => {
  let service: FdserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FdserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

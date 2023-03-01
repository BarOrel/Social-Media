import { TestBed } from '@angular/core/testing';

import { IsLoggedInServiceService } from './is-logged-in-service.service';

describe('IsLoggedInServiceService', () => {
  let service: IsLoggedInServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLoggedInServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

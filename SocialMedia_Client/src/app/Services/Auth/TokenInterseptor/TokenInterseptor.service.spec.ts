/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenInterseptorService } from './TokenInterseptor.service';

describe('Service: TokenInterseptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterseptorService]
    });
  });

  it('should ...', inject([TokenInterseptorService], (service: TokenInterseptorService) => {
    expect(service).toBeTruthy();
  }));
});

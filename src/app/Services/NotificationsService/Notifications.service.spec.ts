/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotificationsService } from './Notifications.service';

describe('Service: Notifications', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationsService]
    });
  });

  it('should ...', inject([NotificationsService], (service: NotificationsService) => {
    expect(service).toBeTruthy();
  }));
});

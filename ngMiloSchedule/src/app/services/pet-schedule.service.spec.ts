import { TestBed } from '@angular/core/testing';

import { PetScheduleService } from './pet-schedule.service';

describe('PetScheduleService', () => {
  let service: PetScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

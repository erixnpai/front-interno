import { TestBed } from '@angular/core/testing';

import { ViajesServiceService } from './viajes-service.service';

describe('ViajesServiceService', () => {
  let service: ViajesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

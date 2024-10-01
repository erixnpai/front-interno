import { TestBed } from '@angular/core/testing';

import { ConductoresServiceService } from './conductores-service.service';

describe('ConductoresServiceService', () => {
  let service: ConductoresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConductoresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

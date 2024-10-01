import { TestBed } from '@angular/core/testing';

import { SolicitudesServiceService } from './solicitudes-service.service';

describe('SolicitudesServiceService', () => {
  let service: SolicitudesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

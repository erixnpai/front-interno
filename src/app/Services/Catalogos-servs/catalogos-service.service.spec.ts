import { TestBed } from '@angular/core/testing';

import { CatalogosServiceService } from './catalogos-service.service';

describe('CatalogosServiceService', () => {
  let service : CatalogosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

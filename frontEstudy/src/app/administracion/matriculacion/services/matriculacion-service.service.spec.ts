import { TestBed } from '@angular/core/testing';

import { MatriculacionServiceService } from './matriculacion-service.service';

describe('MatriculacionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatriculacionServiceService = TestBed.get(MatriculacionServiceService);
    expect(service).toBeTruthy();
  });
});

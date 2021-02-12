import { TestBed } from '@angular/core/testing';

import { SeguimientoExamenService } from './seguimiento-examen.service';

describe('SeguimientoExamenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeguimientoExamenService = TestBed.get(SeguimientoExamenService);
    expect(service).toBeTruthy();
  });
});

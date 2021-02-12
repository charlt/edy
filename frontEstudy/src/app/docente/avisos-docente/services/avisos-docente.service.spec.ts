import { TestBed } from '@angular/core/testing';

import { AvisosDocenteService } from './avisos-docente.service';

describe('AvisosDocenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvisosDocenteService = TestBed.get(AvisosDocenteService);
    expect(service).toBeTruthy();
  });
});

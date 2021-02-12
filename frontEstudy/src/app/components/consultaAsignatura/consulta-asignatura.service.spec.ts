import { TestBed } from '@angular/core/testing';

import { ConsultaAsignaturaService } from './consulta-asignatura.service';

describe('ConsultaAsignaturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaAsignaturaService = TestBed.get(ConsultaAsignaturaService);
    expect(service).toBeTruthy();
  });
});

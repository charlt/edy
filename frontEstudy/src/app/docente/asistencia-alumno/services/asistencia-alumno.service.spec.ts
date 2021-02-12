import { TestBed } from '@angular/core/testing';

import { AsistenciaAlumnoService } from './asistencia-alumno.service';

describe('AsistenciaAlumnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsistenciaAlumnoService = TestBed.get(AsistenciaAlumnoService);
    expect(service).toBeTruthy();
  });
});

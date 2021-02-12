import { TestBed } from '@angular/core/testing';

import { MateriasAlumnosService } from './materias-alumnos.service';

describe('MateriasAlumnosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MateriasAlumnosService = TestBed.get(MateriasAlumnosService);
    expect(service).toBeTruthy();
  });
});

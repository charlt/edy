import { TestBed } from '@angular/core/testing';

import { AsignaturaGrupoService } from './asignatura-grupo.service';

describe('AsignaturaGrupoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignaturaGrupoService = TestBed.get(AsignaturaGrupoService);
    expect(service).toBeTruthy();
  });
});

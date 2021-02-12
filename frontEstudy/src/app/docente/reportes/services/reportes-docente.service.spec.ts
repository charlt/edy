import { TestBed } from '@angular/core/testing';

import { ReportesDocenteService } from './reportes-docente.service';

describe('ReportesDocenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportesDocenteService = TestBed.get(ReportesDocenteService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DiagnosticaService } from './diagnostica.service';

describe('DiagnosticaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiagnosticaService = TestBed.get(DiagnosticaService);
    expect(service).toBeTruthy();
  });
});

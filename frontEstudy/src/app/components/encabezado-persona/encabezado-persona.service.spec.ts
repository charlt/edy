import { TestBed } from '@angular/core/testing';

import { EncabezadoPersonaService } from './encabezado-persona.service';

describe('EncabezadoPersonaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncabezadoPersonaService = TestBed.get(EncabezadoPersonaService);
    expect(service).toBeTruthy();
  });
});

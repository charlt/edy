import { TestBed } from '@angular/core/testing';

import { BuscadorPersonaService } from './buscador-persona.service';

describe('BuscadorPersonaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscadorPersonaService = TestBed.get(BuscadorPersonaService);
    expect(service).toBeTruthy();
  });
});

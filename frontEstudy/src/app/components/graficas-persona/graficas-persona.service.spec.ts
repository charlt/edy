import { TestBed } from '@angular/core/testing';

import { GraficasPersonaService } from './graficas-persona.service';

describe('GraficasPersonaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraficasPersonaService = TestBed.get(GraficasPersonaService);
    expect(service).toBeTruthy();
  });
});

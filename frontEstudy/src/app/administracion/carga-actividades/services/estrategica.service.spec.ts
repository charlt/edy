import { TestBed } from '@angular/core/testing';

import { EstrategicaService } from './estrategica.service';

describe('EstrategicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstrategicaService = TestBed.get(EstrategicaService);
    expect(service).toBeTruthy();
  });
});

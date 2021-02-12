import { TestBed } from '@angular/core/testing';

import { PortafolioEvidenciasService } from './portafolio-evidencias.service';

describe('PortafolioEvidenciasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortafolioEvidenciasService = TestBed.get(PortafolioEvidenciasService);
    expect(service).toBeTruthy();
  });
});

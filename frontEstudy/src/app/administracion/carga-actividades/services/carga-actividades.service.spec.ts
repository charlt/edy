import { TestBed } from '@angular/core/testing';

import { CargaActividadesService } from './carga-actividades.service';

describe('CargaActividadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargaActividadesService = TestBed.get(CargaActividadesService);
    expect(service).toBeTruthy();
  });
});

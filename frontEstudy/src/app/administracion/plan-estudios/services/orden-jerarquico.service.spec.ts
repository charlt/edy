import { TestBed } from '@angular/core/testing';

import { OrdenJerarquicoService } from './orden-jerarquico.service';

describe('OrdenJerarquicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdenJerarquicoService = TestBed.get(OrdenJerarquicoService);
    expect(service).toBeTruthy();
  });
});

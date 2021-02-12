import { TestBed } from '@angular/core/testing';

import { AbiertaService } from './abierta.service';

describe('AbiertaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbiertaService = TestBed.get(AbiertaService);
    expect(service).toBeTruthy();
  });
});

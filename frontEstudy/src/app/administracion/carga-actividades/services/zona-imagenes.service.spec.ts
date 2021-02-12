import { TestBed } from '@angular/core/testing';

import { ZonaImagenesService } from './zona-imagenes.service';

describe('ZonaImagenesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZonaImagenesService = TestBed.get(ZonaImagenesService);
    expect(service).toBeTruthy();
  });
});

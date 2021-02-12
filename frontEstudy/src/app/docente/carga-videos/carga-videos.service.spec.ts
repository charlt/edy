import { TestBed } from '@angular/core/testing';

import { CargaVideosService } from './carga-videos.service';

describe('CargaVideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargaVideosService = TestBed.get(CargaVideosService);
    expect(service).toBeTruthy();
  });
});

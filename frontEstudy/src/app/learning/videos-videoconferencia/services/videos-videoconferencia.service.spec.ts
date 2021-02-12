import { TestBed } from '@angular/core/testing';

import { VideosVideoconferenciaService } from './videos-videoconferencia.service';

describe('VideosVideoconferenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideosVideoconferenciaService = TestBed.get(VideosVideoconferenciaService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VideoConferenciaService } from './video-conferencia.service';

describe('VideoConferenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoConferenciaService = TestBed.get(VideoConferenciaService);
    expect(service).toBeTruthy();
  });
});

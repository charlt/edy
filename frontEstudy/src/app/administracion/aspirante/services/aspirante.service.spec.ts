import { TestBed } from '@angular/core/testing';

import { AspiranteService } from './aspirante.service';

describe('AspiranteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AspiranteService = TestBed.get(AspiranteService);
    expect(service).toBeTruthy();
  });
});

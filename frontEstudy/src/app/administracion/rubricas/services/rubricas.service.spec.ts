import { TestBed } from '@angular/core/testing';

import { RubricasService } from './rubricas.service';

describe('RubricasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RubricasService = TestBed.get(RubricasService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VinculacionIdeasService } from './vinculacion-ideas.service';

describe('VinculacionIdeasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VinculacionIdeasService = TestBed.get(VinculacionIdeasService);
    expect(service).toBeTruthy();
  });
});

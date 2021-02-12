import { TestBed } from '@angular/core/testing';

import { AdjuntableService } from './adjuntable.service';

describe('AdjuntableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdjuntableService = TestBed.get(AdjuntableService);
    expect(service).toBeTruthy();
  });
});

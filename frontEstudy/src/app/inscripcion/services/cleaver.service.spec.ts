import { TestBed } from '@angular/core/testing';

import { CleaverService } from './cleaver.service';

describe('CleaverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CleaverService = TestBed.get(CleaverService);
    expect(service).toBeTruthy();
  });
});

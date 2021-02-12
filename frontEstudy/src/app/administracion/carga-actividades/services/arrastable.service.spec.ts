import { TestBed } from '@angular/core/testing';

import { ArrastableService } from './arrastable.service';

describe('ArrastableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrastableService = TestBed.get(ArrastableService);
    expect(service).toBeTruthy();
  });
});

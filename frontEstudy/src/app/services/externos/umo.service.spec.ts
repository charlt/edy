import { TestBed } from '@angular/core/testing';

import { UmoService } from './umo.service';

describe('UmoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmoService = TestBed.get(UmoService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PlanEstudiosService } from './plan-estudios.service';

describe('PlanEstudiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanEstudiosService = TestBed.get(PlanEstudiosService);
    expect(service).toBeTruthy();
  });
});

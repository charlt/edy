import { TestBed } from '@angular/core/testing';

import { ActividadSqaService } from './actividad-sqa.service';

describe('ActividadSqaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActividadSqaService = TestBed.get(ActividadSqaService);
    expect(service).toBeTruthy();
  });
});

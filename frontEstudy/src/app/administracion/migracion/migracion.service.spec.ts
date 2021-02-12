import { TestBed } from '@angular/core/testing';

import { MigracionService } from './migracion.service';

describe('MigracionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MigracionService = TestBed.get(MigracionService);
    expect(service).toBeTruthy();
  });
});

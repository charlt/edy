import { TestBed } from '@angular/core/testing';

import { MateriasExtrasService } from './materias-extras.service';

describe('MateriasExtrasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MateriasExtrasService = TestBed.get(MateriasExtrasService);
    expect(service).toBeTruthy();
  });
});

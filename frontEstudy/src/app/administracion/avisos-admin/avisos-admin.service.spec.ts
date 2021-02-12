import { TestBed } from '@angular/core/testing';

import { AvisosAdminService } from './avisos-admin.service';

describe('AvisosAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvisosAdminService = TestBed.get(AvisosAdminService);
    expect(service).toBeTruthy();
  });
});

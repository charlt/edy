import { TestBed } from '@angular/core/testing';

import { AdminExpedienteService } from './admin-expediente.service';

describe('AdminExpedienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminExpedienteService = TestBed.get(AdminExpedienteService);
    expect(service).toBeTruthy();
  });
});

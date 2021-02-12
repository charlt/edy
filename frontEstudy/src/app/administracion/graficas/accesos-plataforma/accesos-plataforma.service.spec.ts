import { TestBed } from '@angular/core/testing';

import { AccesosPlataformaService } from './accesos-plataforma.service';

describe('AccesosPlataformaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccesosPlataformaService = TestBed.get(AccesosPlataformaService);
    expect(service).toBeTruthy();
  });
});

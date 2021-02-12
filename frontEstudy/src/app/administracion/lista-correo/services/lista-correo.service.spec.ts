import { TestBed } from '@angular/core/testing';

import { ListaCorreoService } from './lista-correo.service';

describe('ListaCorreoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaCorreoService = TestBed.get(ListaCorreoService);
    expect(service).toBeTruthy();
  });
});

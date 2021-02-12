import { TestBed } from '@angular/core/testing';

import { LogotipoUsuarioService } from './logotipo-usuario.service';

describe('LogotipoUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogotipoUsuarioService = TestBed.get(LogotipoUsuarioService);
    expect(service).toBeTruthy();
  });
});

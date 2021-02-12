import { TestBed } from '@angular/core/testing';

import { OtrosLoginService } from './otros-login.service';

describe('OtrosLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtrosLoginService = TestBed.get(OtrosLoginService);
    expect(service).toBeTruthy();
  });
});

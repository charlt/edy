import { TestBed } from '@angular/core/testing';

import { BasicLoginService } from './basic-login.service';

describe('BasicLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicLoginService = TestBed.get(BasicLoginService);
    expect(service).toBeTruthy();
  });
});

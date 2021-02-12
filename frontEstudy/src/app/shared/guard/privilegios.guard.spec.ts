import { TestBed, async, inject } from '@angular/core/testing';

import { PrivilegiosGuard } from './privilegios.guard';

describe('PrivilegiosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivilegiosGuard]
    });
  });

  it('should ...', inject([PrivilegiosGuard], (guard: PrivilegiosGuard) => {
    expect(guard).toBeTruthy();
  }));
});

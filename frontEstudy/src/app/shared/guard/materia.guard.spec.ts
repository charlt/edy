import { TestBed, async, inject } from '@angular/core/testing';

import { MateriaGuard } from './materia.guard';

describe('MateriaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MateriaGuard]
    });
  });

  it('should ...', inject([MateriaGuard], (guard: MateriaGuard) => {
    expect(guard).toBeTruthy();
  }));
});

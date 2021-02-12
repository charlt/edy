import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasAlumnosComponent } from './materias-alumnos.component';

describe('MateriasAlumnosComponent', () => {
  let component: MateriasAlumnosComponent;
  let fixture: ComponentFixture<MateriasAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

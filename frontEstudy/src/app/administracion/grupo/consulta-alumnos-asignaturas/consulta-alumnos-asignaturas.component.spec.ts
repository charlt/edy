import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAlumnosAsignaturasComponent } from './consulta-alumnos-asignaturas.component';

describe('ConsultaAlumnosAsignaturasComponent', () => {
  let component: ConsultaAlumnosAsignaturasComponent;
  let fixture: ComponentFixture<ConsultaAlumnosAsignaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaAlumnosAsignaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAlumnosAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

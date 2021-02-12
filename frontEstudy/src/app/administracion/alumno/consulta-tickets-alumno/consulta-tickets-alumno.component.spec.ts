import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTicketsAlumnoComponent } from './consulta-tickets-alumno.component';

describe('ConsultaTicketsAlumnoComponent', () => {
  let component: ConsultaTicketsAlumnoComponent;
  let fixture: ComponentFixture<ConsultaTicketsAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTicketsAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTicketsAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

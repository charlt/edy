import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAsignaturaComponent } from './consulta-asignatura.component';

describe('ConsultaAsignaturaComponent', () => {
  let component: ConsultaAsignaturaComponent;
  let fixture: ComponentFixture<ConsultaAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaAsignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

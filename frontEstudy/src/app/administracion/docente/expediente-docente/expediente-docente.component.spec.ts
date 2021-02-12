import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteDocenteComponent } from './expediente-docente.component';

describe('ExpedienteDocenteComponent', () => {
  let component: ExpedienteDocenteComponent;
  let fixture: ComponentFixture<ExpedienteDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedienteDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedienteDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

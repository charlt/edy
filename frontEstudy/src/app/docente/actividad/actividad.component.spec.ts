import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadDocenteComponent } from './actividad.component';

describe('ActividadDocenteComponent', () => {
  let component: ActividadDocenteComponent;
  let fixture: ComponentFixture<ActividadDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

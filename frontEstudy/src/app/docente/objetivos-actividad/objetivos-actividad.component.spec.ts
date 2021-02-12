import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosActividadComponent } from './objetivos-actividad.component';

describe('ObjetivosActividadComponent', () => {
  let component: ObjetivosActividadComponent;
  let fixture: ComponentFixture<ObjetivosActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivosActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivosActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoCalificacionComponent } from './calculo-calificacion.component';

describe('CalculoCalificacionComponent', () => {
  let component: CalculoCalificacionComponent;
  let fixture: ComponentFixture<CalculoCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculoCalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

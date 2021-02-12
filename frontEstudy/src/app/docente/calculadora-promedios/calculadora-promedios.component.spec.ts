import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraPromediosComponent } from './calculadora-promedios.component';

describe('CalculadoraPromediosComponent', () => {
  let component: CalculadoraPromediosComponent;
  let fixture: ComponentFixture<CalculadoraPromediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraPromediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraPromediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

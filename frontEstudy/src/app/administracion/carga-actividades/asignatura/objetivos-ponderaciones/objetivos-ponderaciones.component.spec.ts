import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosPonderacionesComponent } from './objetivos-ponderaciones.component';

describe('ObjetivosPonderacionesComponent', () => {
  let component: ObjetivosPonderacionesComponent;
  let fixture: ComponentFixture<ObjetivosPonderacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivosPonderacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivosPonderacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

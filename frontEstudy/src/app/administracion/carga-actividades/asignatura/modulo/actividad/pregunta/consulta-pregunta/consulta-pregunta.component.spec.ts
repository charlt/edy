import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPreguntaComponent } from './consulta-pregunta.component';

describe('ConsultaPreguntaComponent', () => {
  let component: ConsultaPreguntaComponent;
  let fixture: ComponentFixture<ConsultaPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

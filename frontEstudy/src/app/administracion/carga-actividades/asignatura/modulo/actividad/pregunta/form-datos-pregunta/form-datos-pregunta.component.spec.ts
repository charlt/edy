import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatosPreguntaComponent } from './form-datos-pregunta.component';

describe('FormDatosPreguntaComponent', () => {
  let component: FormDatosPreguntaComponent;
  let fixture: ComponentFixture<FormDatosPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDatosPreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDatosPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPreguntasComponent } from './form-preguntas.component';

describe('FormPreguntasComponent', () => {
  let component: FormPreguntasComponent;
  let fixture: ComponentFixture<FormPreguntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPreguntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

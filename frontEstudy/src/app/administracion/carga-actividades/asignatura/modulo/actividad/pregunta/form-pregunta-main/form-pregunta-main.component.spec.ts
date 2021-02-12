import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPreguntaMainComponent } from './form-pregunta-main.component';

describe('FormPreguntaMainComponent', () => {
  let component: FormPreguntaMainComponent;
  let fixture: ComponentFixture<FormPreguntaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPreguntaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPreguntaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

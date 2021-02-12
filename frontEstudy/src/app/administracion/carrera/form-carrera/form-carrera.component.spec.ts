import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCarreraComponent } from './form-carrera.component';

describe('FormCarreraComponent', () => {
  let component: FormCarreraComponent;
  let fixture: ComponentFixture<FormCarreraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCarreraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

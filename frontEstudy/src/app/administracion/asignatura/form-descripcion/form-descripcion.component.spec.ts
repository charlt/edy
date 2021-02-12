import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDescripcionComponent } from './form-descripcion.component';

describe('FormDescripcionComponent', () => {
  let component: FormDescripcionComponent;
  let fixture: ComponentFixture<FormDescripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDescripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

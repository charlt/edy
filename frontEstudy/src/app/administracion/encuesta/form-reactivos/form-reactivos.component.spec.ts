import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactivosComponent } from './form-reactivos.component';

describe('FormReactivosComponent', () => {
  let component: FormReactivosComponent;
  let fixture: ComponentFixture<FormReactivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

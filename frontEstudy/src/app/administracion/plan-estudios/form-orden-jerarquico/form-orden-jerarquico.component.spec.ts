import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOrdenJerarquicoComponent } from './form-orden-jerarquico.component';

describe('FormOrdenJerarquicoComponent', () => {
  let component: FormOrdenJerarquicoComponent;
  let fixture: ComponentFixture<FormOrdenJerarquicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOrdenJerarquicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOrdenJerarquicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

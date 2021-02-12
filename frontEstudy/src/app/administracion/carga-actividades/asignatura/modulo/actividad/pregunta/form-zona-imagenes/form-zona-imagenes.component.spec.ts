import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormZonaImagenesComponent } from './form-zona-imagenes.component';

describe('FormZonaImagenesComponent', () => {
  let component: FormZonaImagenesComponent;
  let fixture: ComponentFixture<FormZonaImagenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormZonaImagenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormZonaImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

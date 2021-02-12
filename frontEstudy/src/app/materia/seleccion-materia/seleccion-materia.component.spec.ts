import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionMateriaComponent } from './seleccion-materia.component';

describe('SeleccionMateriaComponent', () => {
  let component: SeleccionMateriaComponent;
  let fixture: ComponentFixture<SeleccionMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

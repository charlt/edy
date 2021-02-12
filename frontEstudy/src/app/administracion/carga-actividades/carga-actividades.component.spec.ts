import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaActividadesComponent } from './carga-actividades.component';

describe('ModuloComponent', () => {
  let component: CargaActividadesComponent;
  let fixture: ComponentFixture<CargaActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaLayoutPagosComponent } from './carga-layout-pagos.component';

describe('CargaLayoutPagosComponent', () => {
  let component: CargaLayoutPagosComponent;
  let fixture: ComponentFixture<CargaLayoutPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaLayoutPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaLayoutPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

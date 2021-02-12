import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPagosComponent } from './catalogo-pagos.component';

describe('CatalogoPagosComponent', () => {
  let component: CatalogoPagosComponent;
  let fixture: ComponentFixture<CatalogoPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

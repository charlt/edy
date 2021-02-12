import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoFacilComponent } from './pago-facil.component';

describe('PagoFacilComponent', () => {
  let component: PagoFacilComponent;
  let fixture: ComponentFixture<PagoFacilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoFacilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoFacilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

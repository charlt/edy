import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudPagosComponent } from './solicitud.component';

describe('SolicitudPagosComponent', () => {
  let component: SolicitudPagosComponent;
  let fixture: ComponentFixture<SolicitudPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

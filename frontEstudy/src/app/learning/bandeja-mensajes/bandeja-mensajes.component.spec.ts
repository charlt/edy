import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaMensajesComponent } from './bandeja-mensajes.component';

describe('BandejaMensajesComponent', () => {
  let component: BandejaMensajesComponent;
  let fixture: ComponentFixture<BandejaMensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandejaMensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoExamenComponent } from './seguimiento-examen.component';

describe('SeguimientoExamenComponent', () => {
  let component: SeguimientoExamenComponent;
  let fixture: ComponentFixture<SeguimientoExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

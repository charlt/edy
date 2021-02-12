import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlActividadComponent } from './control-actividad.component';

describe('ControlActividadComponent', () => {
  let component: ControlActividadComponent;
  let fixture: ComponentFixture<ControlActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

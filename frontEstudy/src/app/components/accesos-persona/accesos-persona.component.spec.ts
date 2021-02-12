import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesosPersonaComponent } from './accesos-persona.component';

describe('AccesosPersonaComponent', () => {
  let component: AccesosPersonaComponent;
  let fixture: ComponentFixture<AccesosPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesosPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesosPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

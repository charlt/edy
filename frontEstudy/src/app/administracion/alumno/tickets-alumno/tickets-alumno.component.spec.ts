import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsAlumnoComponent } from './tickets-alumno.component';

describe('TicketsAlumnoComponent', () => {
  let component: TicketsAlumnoComponent;
  let fixture: ComponentFixture<TicketsAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

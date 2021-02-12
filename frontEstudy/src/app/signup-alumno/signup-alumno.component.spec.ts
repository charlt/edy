import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAlumnoComponent } from './signup-alumno.component';

describe('SignupAlumnoComponent', () => {
  let component: SignupAlumnoComponent;
  let fixture: ComponentFixture<SignupAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

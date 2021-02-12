import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosAcademicosComponent } from './servicios-academicos.component';

describe('ServiciosAcademicosComponent', () => {
  let component: ServiciosAcademicosComponent;
  let fixture: ComponentFixture<ServiciosAcademicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosAcademicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosAcademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

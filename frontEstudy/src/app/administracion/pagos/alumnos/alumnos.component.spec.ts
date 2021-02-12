import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosAlumnosComponent } from './alumnos.component';

describe('PagosAlumnosComponent', () => {
  let component: PagosAlumnosComponent;
  let fixture: ComponentFixture<PagosAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

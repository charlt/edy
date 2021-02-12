import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadSQAComponent } from './actividad-sqa.component';

describe('ActividadSQAComponent', () => {
  let component: ActividadSQAComponent;
  let fixture: ComponentFixture<ActividadSQAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadSQAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadSQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainActividadComponent } from './main.component';

describe('MainActividadComponent', () => {
  let component: MainActividadComponent;
  let fixture: ComponentFixture<MainActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

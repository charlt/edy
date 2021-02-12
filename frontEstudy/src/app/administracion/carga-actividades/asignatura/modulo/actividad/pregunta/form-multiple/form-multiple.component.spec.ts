import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMultipleComponent } from './form-multiple.component';

describe('FormMultipleComponent', () => {
  let component: FormMultipleComponent;
  let fixture: ComponentFixture<FormMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

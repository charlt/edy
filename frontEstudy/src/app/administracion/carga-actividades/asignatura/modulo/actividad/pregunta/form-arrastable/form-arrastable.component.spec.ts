import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrastableComponent } from './form-arrastable.component';

describe('FormArrastableComponent', () => {
  let component: FormArrastableComponent;
  let fixture: ComponentFixture<FormArrastableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArrastableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrastableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

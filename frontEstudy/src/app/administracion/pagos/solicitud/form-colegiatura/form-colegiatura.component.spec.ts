import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormColegiaturaComponent } from './form-colegiatura.component';

describe('FormColegiaturaComponent', () => {
  let component: FormColegiaturaComponent;
  let fixture: ComponentFixture<FormColegiaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormColegiaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormColegiaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

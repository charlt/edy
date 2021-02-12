import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPayComponent } from './open-pay.component';

describe('OpenPayComponent', () => {
  let component: OpenPayComponent;
  let fixture: ComponentFixture<OpenPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

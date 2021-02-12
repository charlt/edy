import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaverComponent } from './cleaver.component';

describe('CleaverComponent', () => {
  let component: CleaverComponent;
  let fixture: ComponentFixture<CleaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

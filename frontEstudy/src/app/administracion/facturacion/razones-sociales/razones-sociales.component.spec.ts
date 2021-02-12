import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazonesSocialesComponent } from './razones-sociales.component';

describe('RazonesSocialesComponent', () => {
  let component: RazonesSocialesComponent;
  let fixture: ComponentFixture<RazonesSocialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazonesSocialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazonesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

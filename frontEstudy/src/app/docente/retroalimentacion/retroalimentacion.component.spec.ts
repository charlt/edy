import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroalimentacionComponent } from './retroalimentacion.component';

describe('RetroalimentacionComponent', () => {
  let component: RetroalimentacionComponent;
  let fixture: ComponentFixture<RetroalimentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroalimentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroalimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

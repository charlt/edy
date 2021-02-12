import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreccionComponent } from './correccion.component';

describe('CorreccionComponent', () => {
  let component: CorreccionComponent;
  let fixture: ComponentFixture<CorreccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTextoComponent } from './texto.component';

describe('TextoComponent', () => {
  let component: MultipleTextoComponent;
  let fixture: ComponentFixture<MultipleTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

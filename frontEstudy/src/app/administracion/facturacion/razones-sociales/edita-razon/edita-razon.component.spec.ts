import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaRazonComponent } from './edita-razon.component';

describe('EditaRazonComponent', () => {
  let component: EditaRazonComponent;
  let fixture: ComponentFixture<EditaRazonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaRazonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaRazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

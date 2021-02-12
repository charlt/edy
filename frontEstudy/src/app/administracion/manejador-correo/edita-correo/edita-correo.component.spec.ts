import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaCorreoComponent } from './edita-correo.component';

describe('EditaCorreoComponent', () => {
  let component: EditaCorreoComponent;
  let fixture: ComponentFixture<EditaCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

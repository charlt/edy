import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPrivilegiosComponent } from './edita-privilegios.component';

describe('EditaPrivilegiosComponent', () => {
  let component: EditaPrivilegiosComponent;
  let fixture: ComponentFixture<EditaPrivilegiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaPrivilegiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaPrivilegiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

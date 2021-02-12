import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaRolUsuarioComponent } from './edita-rol-usuario.component';

describe('EditaRolUsuarioComponent', () => {
  let component: EditaRolUsuarioComponent;
  let fixture: ComponentFixture<EditaRolUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaRolUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaRolUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

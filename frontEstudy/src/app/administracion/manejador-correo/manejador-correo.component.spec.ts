import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejadorCorreoComponent } from './manejador-correo.component';

describe('ManejadorCorreoComponent', () => {
  let component: ManejadorCorreoComponent;
  let fixture: ComponentFixture<ManejadorCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejadorCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejadorCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

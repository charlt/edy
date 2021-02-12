import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExpedienteComponent } from './admin-expediente.component';

describe('AdminExpedienteComponent', () => {
  let component: AdminExpedienteComponent;
  let fixture: ComponentFixture<AdminExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

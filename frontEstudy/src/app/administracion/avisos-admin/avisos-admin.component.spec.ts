import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosAdminComponent } from './avisos-admin.component';

describe('AvisosAdminComponent', () => {
  let component: AvisosAdminComponent;
  let fixture: ComponentFixture<AvisosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

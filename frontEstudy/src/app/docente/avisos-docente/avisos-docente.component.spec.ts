import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosDocenteComponent } from './avisos-docente.component';

describe('AvisosDocenteComponent', () => {
  let component: AvisosDocenteComponent;
  let fixture: ComponentFixture<AvisosDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisosDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisosDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

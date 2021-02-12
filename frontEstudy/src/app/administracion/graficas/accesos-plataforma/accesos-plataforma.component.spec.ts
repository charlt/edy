import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesosPlataformaComponent } from './accesos-plataforma.component';

describe('AccesosPlataformaComponent', () => {
  let component: AccesosPlataformaComponent;
  let fixture: ComponentFixture<AccesosPlataformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesosPlataformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesosPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

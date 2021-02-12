import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoComponent } from './contenido.component';

describe('ModuloComponent', () => {
  let component: ContenidoComponent;
  let fixture: ComponentFixture<ContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
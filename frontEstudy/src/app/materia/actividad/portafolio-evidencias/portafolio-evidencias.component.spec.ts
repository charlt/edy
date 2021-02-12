import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioEvidenciasComponent } from './portafolio-evidencias.component';

describe('PortafolioEvidenciasComponent', () => {
  let component: PortafolioEvidenciasComponent;
  let fixture: ComponentFixture<PortafolioEvidenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioEvidenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioEvidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

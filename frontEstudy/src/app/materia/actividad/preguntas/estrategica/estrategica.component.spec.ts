import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategicaComponent } from './estrategica.component';

describe('EstrategicaComponent', () => {
  let component: EstrategicaComponent;
  let fixture: ComponentFixture<EstrategicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrategicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrategicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

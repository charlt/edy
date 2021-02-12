import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasPersonaComponent } from './graficas-persona.component';

describe('GraficasPersonaComponent', () => {
  let component: GraficasPersonaComponent;
  let fixture: ComponentFixture<GraficasPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficasPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

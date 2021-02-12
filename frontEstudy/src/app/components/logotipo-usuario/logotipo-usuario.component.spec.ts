import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogotipoUsuarioComponent } from './logotipo-usuario.component';

describe('LogotipoUsuarioComponent', () => {
  let component: LogotipoUsuarioComponent;
  let fixture: ComponentFixture<LogotipoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogotipoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogotipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

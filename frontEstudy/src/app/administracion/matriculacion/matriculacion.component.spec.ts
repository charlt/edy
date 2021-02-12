import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculacionComponent } from './matriculacion.component';

describe('MatriculacionComponent', () => {
  let component: MatriculacionComponent;
  let fixture: ComponentFixture<MatriculacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasExtrasComponent } from './materias-extras.component';

describe('MateriasExtrasComponent', () => {
  let component: MateriasExtrasComponent;
  let fixture: ComponentFixture<MateriasExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

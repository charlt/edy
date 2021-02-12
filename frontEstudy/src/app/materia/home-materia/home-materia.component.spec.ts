import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMateriaComponent } from './home-materia.component';

describe('HomeMateriaComponent', () => {
  let component: HomeMateriaComponent;
  let fixture: ComponentFixture<HomeMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

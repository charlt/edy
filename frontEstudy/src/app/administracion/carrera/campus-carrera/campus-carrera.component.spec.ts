import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusCarreraComponent } from './campus-carrera.component';

describe('CampusCarreraComponent', () => {
  let component: CampusCarreraComponent;
  let fixture: ComponentFixture<CampusCarreraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusCarreraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

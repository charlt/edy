import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionColumnasComponent } from './relacion-columnas.component';

describe('RelacionColumnasComponent', () => {
  let component: RelacionColumnasComponent;
  let fixture: ComponentFixture<RelacionColumnasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacionColumnasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionColumnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

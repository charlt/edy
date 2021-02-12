import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionIdeasComponent } from './vinculacion-ideas.component';

describe('VinculacionIdeasComponent', () => {
  let component: VinculacionIdeasComponent;
  let fixture: ComponentFixture<VinculacionIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculacionIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

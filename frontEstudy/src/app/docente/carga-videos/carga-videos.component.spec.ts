import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaVideosComponent } from './carga-videos.component';

describe('CargaVideosComponent', () => {
  let component: CargaVideosComponent;
  let fixture: ComponentFixture<CargaVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

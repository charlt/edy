import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoconferenciaComponent } from './videoconferencia.component';

describe('VideoconferenciaComponent', () => {
  let component: VideoconferenciaComponent;
  let fixture: ComponentFixture<VideoconferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoconferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoconferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

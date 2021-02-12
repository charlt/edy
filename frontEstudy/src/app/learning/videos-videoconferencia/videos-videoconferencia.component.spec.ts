import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosVideoconferenciaComponent } from './videos-videoconferencia.component';

describe('VideosVideoconferenciaComponent', () => {
  let component: VideosVideoconferenciaComponent;
  let fixture: ComponentFixture<VideosVideoconferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosVideoconferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosVideoconferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

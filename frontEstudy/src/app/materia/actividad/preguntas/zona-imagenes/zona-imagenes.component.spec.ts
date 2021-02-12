import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaImagenesComponent } from './zona-imagenes.component';

describe('ZonaImagenesComponent', () => {
  let component: ZonaImagenesComponent;
  let fixture: ComponentFixture<ZonaImagenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaImagenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

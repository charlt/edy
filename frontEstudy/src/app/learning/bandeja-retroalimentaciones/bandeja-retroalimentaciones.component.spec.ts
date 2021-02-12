import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaRetroalimentacionesComponent } from './bandeja-retroalimentaciones.component';

describe('BandejaRetroalimentacionesComponent', () => {
  let component: BandejaRetroalimentacionesComponent;
  let fixture: ComponentFixture<BandejaRetroalimentacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandejaRetroalimentacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaRetroalimentacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

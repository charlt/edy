import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaRetroalimentacionComponent } from './bandeja-retroalimentacion.component';

describe('BandejaRetroalimentacionComponent', () => {
  let component: BandejaRetroalimentacionComponent;
  let fixture: ComponentFixture<BandejaRetroalimentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandejaRetroalimentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaRetroalimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

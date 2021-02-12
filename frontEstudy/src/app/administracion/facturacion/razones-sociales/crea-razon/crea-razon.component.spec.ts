import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaRazonComponent } from './crea-razon.component';

describe('CreaRazonComponent', () => {
  let component: CreaRazonComponent;
  let fixture: ComponentFixture<CreaRazonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaRazonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaRazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

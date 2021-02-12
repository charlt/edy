import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferirCicloComponent } from './transferir-ciclo.component';

describe('TransferirCicloComponent', () => {
  let component: TransferirCicloComponent;
  let fixture: ComponentFixture<TransferirCicloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferirCicloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferirCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

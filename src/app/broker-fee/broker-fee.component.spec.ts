import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerFeeComponent } from './broker-fee.component';

describe('BrokerFeeComponent', () => {
  let component: BrokerFeeComponent;
  let fixture: ComponentFixture<BrokerFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

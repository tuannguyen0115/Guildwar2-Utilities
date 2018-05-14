import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstanProfitComponent } from './istan-profit.component';

describe('IstanProfitComponent', () => {
  let component: IstanProfitComponent;
  let fixture: ComponentFixture<IstanProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstanProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstanProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichnodeComponent } from './richnode.component';

describe('RichnodeComponent', () => {
  let component: RichnodeComponent;
  let fixture: ComponentFixture<RichnodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichnodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

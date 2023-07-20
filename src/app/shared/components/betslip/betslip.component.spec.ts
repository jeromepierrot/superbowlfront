import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetslipComponent } from './betslip.component';

describe('BetslipComponent', () => {
  let component: BetslipComponent;
  let fixture: ComponentFixture<BetslipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BetslipComponent]
    });
    fixture = TestBed.createComponent(BetslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetslipItemComponent } from './betslip-item.component';

describe('BetslipItemComponent', () => {
  let component: BetslipItemComponent;
  let fixture: ComponentFixture<BetslipItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BetslipItemComponent]
    });
    fixture = TestBed.createComponent(BetslipItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

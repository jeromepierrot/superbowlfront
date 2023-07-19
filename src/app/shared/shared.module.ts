import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { MatchItemComponent } from './components/match-item/match-item.component';
import { BetslipComponent } from './components/betslip/betslip.component';
import { BetslipItemComponent } from './components/betslip-item/betslip-item.component';



@NgModule({
  declarations: [
    MatchItemComponent,
    BetslipComponent,
    BetslipItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    MatchItemComponent,
    BetslipComponent,
    BetslipItemComponent,
  ]
})
export class SharedModule { }

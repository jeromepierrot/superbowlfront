import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { BetsRoutingModule } from './bets-routing.module';
import { BetsComponent } from './components/bets/bets.component';

@NgModule({
  declarations: [
    BetsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    BetsRoutingModule,
  ],
  exports: [
    BetsComponent
  ]
})
export class BetsModule { }

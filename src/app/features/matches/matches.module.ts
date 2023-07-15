import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatchesRoutingModule } from './matches-routing.module';
import { AllmatchesComponent } from './components/allmatches/allmatches.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';


@NgModule({
  declarations: [
    AllmatchesComponent,
    MatchDetailsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MatchesRoutingModule,
  ],
  exports: [
    AllmatchesComponent,
    MatchDetailsComponent,
  ]
})
export class MatchesModule { }

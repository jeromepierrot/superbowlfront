import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatchesRoutingModule } from './matches-routing.module';
import { AllmatchesComponent } from './components/allmatches/allmatches.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { SingleMatchComponent } from './components/single-match/single-match.component';

@NgModule({
  declarations: [
    AllmatchesComponent,
    MatchDetailsComponent,
    SingleMatchComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatchesRoutingModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    AllmatchesComponent,
    MatchDetailsComponent,
    SingleMatchComponent,
  ]
})
export class MatchesModule { }

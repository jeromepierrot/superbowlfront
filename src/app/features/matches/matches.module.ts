import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatchesRoutingModule } from './matches-routing.module';
import { AllmatchesComponent } from './components/allmatches/allmatches.component';

@NgModule({
  declarations: [
    AllmatchesComponent,
  ],
  imports: [
    CommonModule,
    MatchesRoutingModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    AllmatchesComponent
  ]
})
export class MatchesModule { }

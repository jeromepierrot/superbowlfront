import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AllmatchesRoutingModule } from './allmatches-routing.module';
import { AllmatchesComponent } from './allmatches.component';

@NgModule({
  declarations: [
    AllmatchesComponent,
  ],
  imports: [
    CommonModule,
    AllmatchesRoutingModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class AllmatchesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllmatchesRoutingModule } from './allmatches-routing.module';
import { AllmatchesComponent } from './allmatches.component';


@NgModule({
  declarations: [
    AllmatchesComponent
  ],
  imports: [
    CommonModule,
    AllmatchesRoutingModule
  ]
})
export class AllmatchesModule { }

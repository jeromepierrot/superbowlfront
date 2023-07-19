import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { MatchItemComponent } from './components/match-item/match-item.component';


@NgModule({
  declarations: [
    MatchItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    MatchItemComponent,
  ]
})
export class SharedModule { }

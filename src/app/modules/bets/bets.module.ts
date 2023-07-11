import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Design modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { BetsRoutingModule } from './bets-routing.module';
import { BetsComponent } from './bets.component';


@NgModule({
  declarations: [
    BetsComponent
  ],
  imports: [
    CommonModule,

    //Material Design modules
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    
    // custom modules
    BetsRoutingModule,
  ]
})
export class BetsModule { }

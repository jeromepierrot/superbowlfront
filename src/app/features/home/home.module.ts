import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatchListComponent } from 'src/app/features/home/components/match-list/match-list.component';
import { HomeComponent } from './components/homepage/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    MatchListComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }

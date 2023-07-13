import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';


import { HomeComponent } from './components/homepage/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule { }

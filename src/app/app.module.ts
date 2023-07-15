import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesRoutingModule } from './features/matches/matches-routing.module';
import { MatchesModule } from './features/matches/matches.module';
import { BetsRoutingModule } from './features/bets/bets-routing.module';
import { BetsModule } from './features/bets/bets.module';

// Custom components
import { HomeModule } from './features/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule,
    BrowserAnimationsModule,
    FormsModule,

    CoreModule,
    SharedModule,
    MatchesRoutingModule,
    MatchesModule,
    BetsRoutingModule,
    BetsModule,
    HomeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

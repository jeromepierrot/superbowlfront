import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as fr from '@angular/common/locales/fr';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CtaFabComponent } from './components/cta-fab/cta-fab.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchItemComponent } from './components/match-item/match-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    CtaFabComponent,
    MatchListComponent,
    MatchItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    CtaFabComponent,
    MatchListComponent,
    MatchItemComponent,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatchListComponent } from './components/match-list/match-list.component';

const routes: Routes = [
  { path: '', title: 'Bet on Superbowl website', component: HomeComponent },
  { path: 'matches', title: "Today's matches",component: MatchListComponent },
  { path: 'allmatches', title: 'All matches', loadChildren: () => import('./modules/allmatches/allmatches.module').then(m => m.AllmatchesModule) },
  { path: 'bets', title: 'All your bets',loadChildren: () => import('./modules/bets/bets.module').then(m => m.BetsModule) },
  { path: 'login', title: 'Login to your account',loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

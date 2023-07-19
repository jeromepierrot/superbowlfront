import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', title: 'Bet on Superbowl website', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'matches', title: 'All matches', loadChildren: () => import('./features/matches/matches.module').then(m => m.MatchesModule) },
  { path: 'bets', title: 'All your bets',loadChildren: () => import('./features/bets/bets.module').then(m => m.BetsModule) },
  { path: 'login', title: 'Login to your account',loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

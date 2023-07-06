import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/homepage/home/home.component';
import { MatchListComponent } from './components/homepage/match-list/match-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'matches', component: MatchListComponent },
  { path: 'allmatches', loadChildren: () => import('./modules/allmatches/allmatches.module').then(m => m.AllmatchesModule) },
  { path: 'bets', loadChildren: () => import('./modules/bets/bets.module').then(m => m.BetsModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },

  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

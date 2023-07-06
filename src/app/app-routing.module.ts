import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './homepage/home/home.component';
import { MatchListComponent } from './homepage/match-list/match-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'matches', component: MatchListComponent },
  { path: 'allmatches', loadChildren: () => import('./allmatches/allmatches.module').then(m => m.AllmatchesModule) },
  { path: 'bets', loadChildren: () => import('./bets/bets.module').then(m => m.BetsModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

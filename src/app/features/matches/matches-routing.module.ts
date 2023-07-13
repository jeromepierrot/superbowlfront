import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllmatchesComponent } from './components/allmatches/allmatches.component';
import { SingleMatchComponent } from './components/single-match/single-match.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';

const routes: Routes = [
  { path: '', component: AllmatchesComponent },
  { path: ':id', component: SingleMatchComponent },
  { path: 'details/:id', component: MatchDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }

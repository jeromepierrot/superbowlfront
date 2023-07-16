import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllmatchesComponent } from './components/allmatches/allmatches.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';

const routes: Routes = [
  { path: '', component: AllmatchesComponent },
  { path: ':id', component: MatchDetailsComponent },
  { path: 'details/:id', component: MatchDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchesRoutingModule { }

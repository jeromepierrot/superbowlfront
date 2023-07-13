import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllmatchesComponent } from './components/allmatches/allmatches.component';

const routes: Routes = [
  { path: '', component: AllmatchesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }

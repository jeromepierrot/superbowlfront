import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatchesRoutingModule } from './matches-routing.module';
import { AllmatchesComponent } from './components/allmatches/allmatches.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentsService } from './services/comments.service';
import { CommentListItemComponent } from './components/comment-list-item/comment-list-item.component';

@NgModule({
  declarations: [
    AllmatchesComponent,
    MatchDetailsComponent,
    CommentListComponent,
    CommentListItemComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MatchesRoutingModule,
  ],
  exports: [
    AllmatchesComponent,
    MatchDetailsComponent,
  ],
  providers: [
    CommentsService,
  ]
})
export class MatchesModule { }

import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Comment } from 'src/app/core/models/comment';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'sb-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments$!: Observable<Comment[]>;
  @Input() matchId!: number;

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.comments$ = this.commentsService.getCommentsByMatchId(this.matchId);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/core/models/comment';

@Component({
  selector: 'sb-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.css']
})
export class CommentListItemComponent implements OnInit {
  @Input() comment!: Comment;

  constructor() {}

  ngOnInit(): void {
  }
}

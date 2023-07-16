import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/core/models/comment';
import { environment } from 'src/environments/environment';

@Injectable()
export class CommentsService {
  private commentUrl: string = environment.apiUrl + "comments";

  constructor(private http: HttpClient) { }

  getCommentById(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.commentUrl}/${id}`);
  }

  getCommentsByMatchId(matchId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.commentUrl}/match/${matchId}`);
  }
}


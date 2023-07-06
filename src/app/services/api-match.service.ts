import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../domain/match';

@Injectable({
  providedIn: 'root'
})
export class ApiMatchService {

  matchesUrl: string = "http://localhost:8080/api/matches";

  constructor(private http: HttpClient) { }

  getMatches() : Observable<Match[]> {
    return this.http.get<Match[]>(this.matchesUrl);
  }

  getMatchById(id: number) : Observable<Match> {
    return this.http.get<Match>(this.matchesUrl + "/" + id);
  }
}

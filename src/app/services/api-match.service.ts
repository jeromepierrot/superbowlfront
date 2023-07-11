import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../models/match';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiMatchService {

  matchesUrl: string = environment.apiUrl + "matches";

  constructor(private http: HttpClient) { }

  getMatches() : Observable<Match[]> {
    return this.http.get<Match[]>(this.matchesUrl);
  }

  getMatchesByDate(date: string): Observable<Match[]> {
    return this.http.get<Match[]>(this.matchesUrl + "/?date=" + date);
  }

  getMatchesForToday(): Observable<Match[]> {
    return this.http.get<Match[]>(this.matchesUrl + "/today");
 
  }

  getMatchById(id: number) : Observable<Match> {
    return this.http.get<Match>(this.matchesUrl + "/" + id);
  }
}

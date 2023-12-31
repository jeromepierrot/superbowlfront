import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from 'src/app/core/models/match';
import { Player } from 'src/app/core/models/player';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiMatchService {

  matchesUrl: string = environment.apiUrl + "matches";

  constructor(private http: HttpClient) { }

  getMatches() : Observable<Match[]> {
    return this.http.get<Match[]>(`${this.matchesUrl}`);
  }

  getMatchesByDate(date: string): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.matchesUrl}/?date=${date}`);
  }

  getMatchesForToday(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.matchesUrl}/today`);
  }

  getMatchById(id: number) : Observable<Match> {
    return this.http.get<Match>(`${this.matchesUrl}/${id}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiPlayerService {

  playerUrl: string = environment.apiUrl + "players/team";

  constructor(private http: HttpClient) { }

  getPlayersByTeamId(teamId: number) : Observable<Player[]> {
    return this.http.get<Player[]>(`${this.playerUrl}?id=${teamId}`);
  }
}
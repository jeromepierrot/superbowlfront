import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiMatchService } from 'src/app/services/api-match.service';
import { Match } from '../../domain/match';

@Component({
  selector: 'sb-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  matches$!: Observable<Match[]>;

  constructor(private router: Router, private matchService: ApiMatchService) {
  }

  ngOnInit(): void {
    // this.matches$ = this.matchService.getMatchesByDate('2023-06-28');
   this.matches$ = this.matchService.getMatchesForToday(); // matches of the day
   // this.matches$ = this.matchService.getMatches(); // all matches
  }

  onMatcardClicked() {
    this.router.navigateByUrl("allmatches");
  }
}

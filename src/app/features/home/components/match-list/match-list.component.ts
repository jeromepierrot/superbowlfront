import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiMatchService } from 'src/app/core/services/api-match.service';
import { Match } from 'src/app/core/models/match';

@Component({
  selector: 'sb-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  matches$!: Observable<Match[]>;
  @Input() breakpoint!: number;

  constructor(
    private router: Router, 
    private matchService: ApiMatchService) {
  }

  ngOnInit(): void {
    this.matches$ = this.matchService.getMatchesForToday(); // matches of the day
  }

  onMatcardClicked() {
    this.router.navigateByUrl("/matches");
  }
}

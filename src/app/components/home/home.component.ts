import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiMatchService } from 'src/app/services/api-match.service';
import { Match } from '../../domain/match';

@Component({
  selector: 'sb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public matchItem$!: Observable<Match | null>;
  public allMatches$!: Observable<Match[] | null>;

  constructor(private matchService: ApiMatchService ) {}

  ngOnInit(): void {
    // this.matchItem$ = this.matchService.getMatchById(3);
    this.allMatches$ = this.matchService.getMatches();
  }
}

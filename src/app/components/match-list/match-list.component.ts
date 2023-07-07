import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Match } from '../../domain/match';
import { ApiMatchService } from 'src/app/services/api-match.service';
import { matchlist } from '../../config/match-list.mock';

@Component({
  selector: 'sb-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  @Input() screenSize!: string; 
  public matches$!: Observable<Match[]>;
  public matches: Array<any> = [];

  constructor(private apiMatchService: ApiMatchService, private router: Router) {

  }

  ngOnInit(): void {
    this.matches = matchlist;
  }

  onMatcardClicked() {
    this.router.navigateByUrl("allmatches");
  }
}

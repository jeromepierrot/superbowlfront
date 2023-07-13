import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatList, MatListItem, MatListItemTitle } from '@angular/material/list';
import { matchlist } from 'src/app/config/match-list.mock';
import { Router } from "@angular/router";
import { ApiMatchService } from 'src/app/core/services/api-match.service';
import { Match } from 'src/app/core/models/match';

@Component({
  selector: 'sb-allmatches',
  templateUrl: './allmatches.component.html',
  styleUrls: ['./allmatches.component.css']
})
export class AllmatchesComponent implements OnInit {
  @Input() isLogged = false;
 // matchList = Array.from({length: 100}, (_, i) => `Match Item ${i+1}`);
 // matchList = matchlist; // Mock
  matchList$!: Observable<Match[]>; //

  constructor(private router: Router, private matchService :ApiMatchService) {

  }

  ngOnInit(): void {
    this.matchList$ = this.matchService.getMatches();
  }
}

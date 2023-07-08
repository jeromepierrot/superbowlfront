import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Match } from '../../domain/match';
import { matchlist } from '../../config/match-list.mock';

@Component({
  selector: 'sb-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  @Input() matches!: Match[] | null;
  constructor(private router: Router) {

  }

  ngOnInit(): void {}

  onMatcardClicked() {
    this.router.navigateByUrl("allmatches");
  }
}

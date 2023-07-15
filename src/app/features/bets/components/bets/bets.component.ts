import { Component, OnInit } from '@angular/core';
import { Bet } from 'src/app/core/models/bet';
import { MatList, MatListItem } from '@angular/material/list';
import { matchlist } from 'src/app/config/match-list.mock';

@Component({
  selector: 'sb-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {
  isOpened: boolean = true;
  isEmpty: boolean = false;
  matchListFiller = matchlist;
  betList: Bet[] = [
    {
      id:1,
      match_id:1,
      team_id:3,
      wager_euros:10,
      final_odds: 1.4,
      status: 'BET_OPENED',
    },
    {
      id:2,
      match_id: 2,
      team_id: 9,
      wager_euros:50,
      final_odds: 2.3,
      status: 'BET_CLOSED',
    },
    {
      id:3,
      match_id: 3,
      team_id: 6,
      wager_euros: 100,
      final_odds: 1.4,
      status: 'BET_OPENED',
    },
    {
      id:4,
      match_id: 6,
      team_id: 3,
      wager_euros: 75,
      final_odds: 2.8,
      status: 'BET_OPENED',
    },
  ];

  ngOnInit() {
    this.isOpened = !this.isBetslipEmpty();
  }

  isBetslipEmpty(): boolean {
    let empty = true;
    this.betList.forEach(bet => {
      if (bet.status == 'BET_OPENED') {
        empty = false;
      } 
    });
    return empty;
  }
}
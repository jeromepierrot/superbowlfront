import { Component, Input, OnInit } from '@angular/core';

import { Bet } from 'src/app/core/models/bet';

@Component({
  selector: 'sb-betslip',
  templateUrl: './betslip.component.html',
  styleUrls: ['./betslip.component.css']
})
export class BetslipComponent implements OnInit {
  @Input() betList: Bet[] = [];
  isEmpty!: boolean;

  ngOnInit(): void {
    this.isEmpty = this.isBetslipEmpty();
  }

  isBetslipEmpty(): boolean {
    let empty = true;
    if (this.betList.length > 0) {
      this.betList.forEach(bet => {
        if (bet.status == 'BET_OPENED') {
          empty = false;
        } 
      });
    }
    return empty;
  }
}

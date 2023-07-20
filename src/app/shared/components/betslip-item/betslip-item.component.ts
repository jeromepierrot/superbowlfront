import { Component, OnInit, Input, Output } from '@angular/core';

import { Bet } from 'src/app/core/models/bet';

@Component({
  selector: 'sb-betslip-item',
  templateUrl: './betslip-item.component.html',
  styleUrls: ['./betslip-item.component.css']
})
export class BetslipItemComponent implements OnInit {
  @Input() betItem!: Bet;
  // status variables
  @Output() isEmpty!: boolean;

  ngOnInit(): void {
    
  }
}

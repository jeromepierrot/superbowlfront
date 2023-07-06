import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../../../domain/match';

@Component({
  selector: 'sb-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.css']
})
export class MatchItemComponent implements OnInit {
  
  @Input() matchItem!: Match;

  constructor() {

  }

  ngOnInit(): void {

  }

}

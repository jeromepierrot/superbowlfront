import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../../domain/match';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.css']
})
export class MatchItemComponent implements OnInit {
  
  @Input() matchItem!: Match;

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  onMatcardClicked(): void {
    this.router.navigateByUrl("allmatches");
  }

}

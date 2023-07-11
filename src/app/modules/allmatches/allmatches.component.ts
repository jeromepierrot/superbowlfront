import { Component, OnInit } from '@angular/core';
import { MatList, MatListItem, MatListItemTitle } from '@angular/material/list';
import { matchlist } from 'src/app/config/match-list.mock';

@Component({
  selector: 'sb-allmatches',
  templateUrl: './allmatches.component.html',
  styleUrls: ['./allmatches.component.css']
})
export class AllmatchesComponent implements OnInit {
 // matchListFiller = Array.from({length: 100}, (_, i) => `Match Item ${i+1}`);
  matchListFiller = matchlist;

  constructor() {

  }

  ngOnInit(): void {
    
  }
}

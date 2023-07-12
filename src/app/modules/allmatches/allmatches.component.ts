import { Component, OnInit, Input } from '@angular/core';
import { MatList, MatListItem, MatListItemTitle } from '@angular/material/list';
import { matchlist } from 'src/app/config/match-list.mock';
import { Router } from "@angular/router";

@Component({
  selector: 'sb-allmatches',
  templateUrl: './allmatches.component.html',
  styleUrls: ['./allmatches.component.css']
})
export class AllmatchesComponent implements OnInit {
  @Input() isLogged = false;
 // matchListFiller = Array.from({length: 100}, (_, i) => `Match Item ${i+1}`);
  matchListFiller = matchlist;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    
  }
}

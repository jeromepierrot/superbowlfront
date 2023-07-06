import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../../domain/match';
import { ApiMatchService } from 'src/app/services/api-match.service';

@Component({
  selector: 'sb-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  matches$!: Observable<Match[]>;

  constructor(private apiMatchService: ApiMatchService) {

  }

  ngOnInit(): void {
    
  }
}

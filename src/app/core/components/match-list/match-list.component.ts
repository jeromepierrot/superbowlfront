import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiMatchService } from 'src/app/core/services/api-match.service';
import { Match } from 'src/app/core/models/match';

@Component({
  selector: 'sb-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  matches$!: Observable<Match[]>;

  // Responsive Design
  public breakpoint!: number;
  public currentScreenSize!: string;
  private destroyed = new Subject<void>();


  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router, 
    private matchService: ApiMatchService) {
  }

  ngOnInit(): void {
    // this.matches$ = this.matchService.getMatchesByDate('2023-06-28');
    this.matches$ = this.matchService.getMatchesForToday(); // matches of the day
   // this.matches$ = this.matchService.getMatches(); // all matches
  }

  onMatcardClicked() {
    this.router.navigateByUrl("matches");
  }

  // For responsive display
  ngAfterViewInit(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ]).pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          }
          this.responsiveDisplay(this.currentScreenSize);
        }
      });
  }

  responsiveDisplay(currentScreenSize: string) {
    switch(currentScreenSize) {
      case 'XSmall':
      case 'Small':
        this.breakpoint = 4;
      break;
      case 'Medium': 
      case 'Large':
      case 'XLarge':
      default:
        this.breakpoint = 3;
      break;
    }
  }
}

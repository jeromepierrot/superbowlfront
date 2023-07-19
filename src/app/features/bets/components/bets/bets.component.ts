import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';
import { FabPosition } from 'src/app/core/components/cta-fab/cta-fab.component';

import { Bet } from 'src/app/core/models/bet';
import { MatList, MatListItem } from '@angular/material/list';
import { matchlist } from 'src/app/config/match-list.mock';

@Component({
  selector: 'sb-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit, AfterViewInit, OnDestroy {
  // global variables
  @Input() isLogged = false;
  fabPosition!: FabPosition;

  // For MatDrawer variables
  isOpened: boolean = true;
  isEmpty: boolean = false;

  // Mock variables
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
    private router: Router) {}

  ngOnInit() {
    this.breakpoint = 6;
    this.isOpened = !this.isBetslipEmpty();
  }

  ngAfterViewInit(): void {
    this.detectBreakpoint();
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  detectBreakpoint() {
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
        this.fabPosition = 'bottom';
        this.breakpoint = 8;
      break;
      case 'Medium':
        this.fabPosition = 'aside-bottom';
        this.breakpoint = 6;
      break; 
      case 'Large':
        this.fabPosition = 'aside';
        this.breakpoint = 6;
      break;
      case 'XLarge':
      default:
        this.fabPosition = 'aside';
        this.breakpoint = 5;
      break;
    }
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
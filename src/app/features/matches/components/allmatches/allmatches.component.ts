import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatList, MatListItem, MatListItemTitle } from '@angular/material/list';
import { matchlist } from 'src/app/config/match-list.mock';
import { Router } from "@angular/router";
import { ApiMatchService } from 'src/app/core/services/api-match.service';
import { Match } from 'src/app/core/models/match';

@Component({
  selector: 'sb-allmatches',
  templateUrl: './allmatches.component.html',
  styleUrls: ['./allmatches.component.css']
})
export class AllmatchesComponent implements OnInit {
  @Input() isLogged = false;
 // matchList = Array.from({length: 100}, (_, i) => `Match Item ${i+1}`);
 // matchList = matchlist; // Mock
  public matchList$!: Observable<Match[]>;
  public wait!: boolean;

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
    private matchService :ApiMatchService) {
  }

  ngOnInit(): void {
    this.wait = true;
    this.breakpoint = 6;
    this.matchList$ = this.matchService.getMatches();
    this.wait = false;
  }

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

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  onClicked(id: number): void {
    this.router.navigateByUrl("matches/details/" + id);
  }

  responsiveDisplay(currentScreenSize: string) {
    switch(currentScreenSize) {
      case 'XSmall':
      case 'Small':
        this.breakpoint = 8;
      break;
      case 'Medium': 
      case 'Large':
      case 'XLarge':
      default:
        this.breakpoint = 6;
      break;
    }
  }
}

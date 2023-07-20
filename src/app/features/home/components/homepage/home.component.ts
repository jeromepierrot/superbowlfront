import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';
import { FabPosition } from 'src/app/core/components/cta-fab/cta-fab.component';
import { ApiMatchService } from 'src/app/core/services/api-match.service';
import { Match } from 'src/app/core/models/match';

@Component({
  selector: 'sb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  matches$!: Observable<Match[]>;

  // global variables
  @Input() isLogged = false;
  fabPosition!: FabPosition;

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
    private matchService: ApiMatchService) {}

  ngOnInit(): void {
    this.breakpoint = 6;
    this.matches$ = this.matchService.getMatchesForToday(); // matches of the day
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

  onMatcardClicked() {
    this.router.navigateByUrl("matches");
  }
}

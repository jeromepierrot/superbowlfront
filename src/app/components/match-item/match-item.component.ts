import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Match } from '../../domain/match';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sb-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.css']
})
export class MatchItemComponent implements OnInit, AfterViewInit, OnDestroy {
  public breakpoint!: number;
  public currentScreenSize!: string;
  private destroyed = new Subject<void>();
  @Input() matchItem!: Match;
  @Input() match: any;
  @Input() screenSize!: any;
 // public match!: any;
  public amonstList: boolean= true;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
    ) {  }

  ngOnInit(): void {
    this.breakpoint = 8;
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

  onMatcardClicked(): void {
    this.router.navigateByUrl("allmatches");
  }

  responsiveDisplay(currentScreenSize: string): void {
    switch(currentScreenSize) {
      case 'XSmall':
      case 'Small':
        this.breakpoint = 6;
      break;
      case 'Medium': 
      case 'Large':
      case 'XLarge':
      default:
        this.breakpoint = 8;
      break;
    }
  }
}
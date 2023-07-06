import { Component, OnDestroy, ViewChild } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { Router } from "@angular/router";
import { MatSidenav } from '@angular/material/sidenav'; 

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  destroyed = new Subject<void>();
  currentScreenSize!: string;

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  isOpened: boolean = true;
  isNavbarCollapsed = false;
  links = [
    { title:'Home', fragment: '' , icon: 'home'},
    { title:'All matches', fragment: 'allmatches' , icon: 'sports_football'},
    { title:'Bets', fragment: 'bets' , icon: 'local_atm'},
    { title:'Profile', fragment: 'users' , icon: 'settings'},
    { title:'Logout', fragment: 'logout' , icon: 'power_settings_new'},
  ];

  mobileQuery!: MediaQueryList;

  constructor( 
      private breakpointObserver: BreakpointObserver,
      private router: Router
    ) {
      breakpointObserver
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

  responsiveDisplay(currentScreenSize: string): void {
    switch(currentScreenSize) {
      case 'XSmall':
      case 'Small':
        this.sidenav.mode = 'over';
        this.sidenav.close();
      break;
      case 'Medium': 
      case 'Large':
      case 'XLarge':
      default:
        this.sidenav.mode = 'side';
        this.sidenav.open();
      break;
    }
  }
  
}

import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from "@angular/router";

@Component({
  selector: 'sb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() currentScreenSize!: string;
  @Input() sidenav!: MatSidenav;
  @Input() isLogged!: boolean;

  title = 'Superbowl';
  isLandscape!: boolean;
  isPhone!: boolean;

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    this.isLandscape = true;
    this.isPhone = false; 
  }

  onMenu(): void {
    
  }

  ngAfterViewInit(): void {
    this.responsiveDisplay(this.currentScreenSize);
  }

  onViewHome(): void {
    this.router.navigateByUrl("");
  }

  onViewMatches(): void {
    this.router.navigateByUrl("matches");
  }

  onViewBets(): void {
    this.router.navigateByUrl("bets");
  }

  onViewSignup(): void {
    this.router.navigateByUrl("signup");
  }

  onViewLogin(): void {
    this.router.navigateByUrl("login");
  }

  onViewLogout(): void {
    // TODO : logout route to complete
    this.router.navigateByUrl("logout");
  }

  responsiveDisplay(currentScreenSize: string): void {
    switch(currentScreenSize) {
      case 'XSmall':
        this.isPhone = true;
        this.isLandscape = false;
      break;
      case 'Small':
        this.isPhone = false;
        this.isLandscape = false;
      break;
      case 'Medium':
      case 'Large':
      case 'XLarge':
        this.isPhone = false;
        this.isLandscape = true;
      break;
      default:
        this.isLandscape = true;
        break;
    }
  }
}

import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from "@angular/router";

@Component({
  selector: 'sb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() currentScreenSize!: string;
  @Input() sidenav!: MatSidenav;

  title = 'Superbowl';
  isLandscape: boolean = true;

  constructor(private router: Router) {
    this.responsiveDisplay(this.currentScreenSize);
  }

  onMenu(): void {
    
  }

  onViewHome(): void {
    this.router.navigateByUrl("");
  }

  onViewMatches(): void {
    this.router.navigateByUrl("allmatches");
  }

  onViewBets(): void {
    this.router.navigateByUrl("bets");
  }

  onViewSignup(): void {
    this.router.navigateByUrl("login");
  }

  onViewLogin(): void {
    this.router.navigateByUrl("login");
  }

  responsiveDisplay(currentScreenSize: string): void {
    switch(currentScreenSize) {
      case 'XSmall':
      case 'Small':
      this.isLandscape = false;
      break;
      case 'Medium':
      case 'Large':
      case 'XLarge':
        this.isLandscape = true;
      break;
      default:
        this.isLandscape = true;
        break;
    }
  }
}

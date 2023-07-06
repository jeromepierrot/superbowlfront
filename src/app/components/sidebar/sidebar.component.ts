import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isNavbarCollapsed = false;
  links = [
    { title:'Home', fragment: 'home' },
    { title:'All matches', fragment: 'allmatches' },
    { title:'Bets', fragment: 'bets' },
    { title:'Logout', fragment: 'login' },
  ];
}

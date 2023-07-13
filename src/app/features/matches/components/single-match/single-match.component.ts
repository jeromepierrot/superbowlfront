import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Match } from 'src/app/core/models/match';

@Component({
  selector: 'sb-single-match',
  templateUrl: './single-match.component.html',
  styleUrls: ['./single-match.component.css']
})
export class SingleMatchComponent {
  @Input() matchItem!: Match | null;

  constructor(    
    private breakpointObserver: BreakpointObserver,
    private router: Router) {
    }

  onClicked(): void {
    this.router.navigateByUrl("details");
  }
}

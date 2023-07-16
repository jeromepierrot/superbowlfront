import { Component, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { ApiMatchService, ApiPlayerService } from 'src/app/core/services/api-match.service';
import { CommentsService } from '../../services/comments.service';
import { Match } from 'src/app/core/models/match';
import { match } from 'src/app/config/match.mock';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/core/models/team';
import { Player } from 'src/app/core/models/player';
import { Comment } from 'src/app/core/models/comment';

@Component({
  selector: 'sb-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit, OnDestroy {
  public match!: Match;
  public teamAPlayers!: Player[];
  public teamBPlayers!: Player[];
  public commentsDisabled!: boolean;
  public match$!: Observable<Match>;
  private comments$!: Comment[];
  private destroyed = new Subject<void>();

  public oddsStyle = [
    {'green' : { 'background-color': 'lightgreen', 'color': '#006b00' }},
    {'red' : { 'background-color': 'lightpink', 'color': '#920031'}}
  ];

  @Input() isLogged!: boolean;

  // Responsive Design
  public breakpoint!: number;
  public currentScreenSize!: string;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  teamsColumns: string[] = ['number', 'name'];

  public matchId!: number;

  constructor(private route: ActivatedRoute, 
              private matchService: ApiMatchService,
              private playerService: ApiPlayerService,
              private commentsService: CommentsService,
              private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpoint = 6;
    const teams: Player[][] = [this.teamAPlayers,this.teamBPlayers];
    this.matchId = +this.route.snapshot.params['id'];
    this.commentsDisabled = false;
    this.matchService.getMatchById(this.matchId)
      .pipe(takeUntil(this.destroyed))
      .subscribe(
        (matchData) => {
          this.match = matchData;
          this.playerService.getPlayersByTeamId(this.match.teamA.id)
            .pipe(takeUntil(this.destroyed))
            .subscribe(
              (playersData) => this.teamAPlayers = playersData
            );
          this.playerService.getPlayersByTeamId(this.match.teamB.id)
            .pipe(takeUntil(this.destroyed))
            .subscribe(
              (playersData) => this.teamBPlayers = playersData
          );
        }
      );
  }

  ngAfterViewInit() {
    this.detectBreakpoint();
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  onClick(id: number): void {
    // TODO : 
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
        this.breakpoint = 8;
      break;
      case 'Small':
        this.breakpoint = 7;
      break;
      case 'Medium': 
        this.breakpoint = 6;
      break;
      case 'Large':
      case 'XLarge':
      default:
        this.breakpoint = 5;
      break;
    }
  }
}

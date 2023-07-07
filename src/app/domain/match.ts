export class Match {
  private id!: number;
  private teamA!: {
    id: number,
    name: string,
    country: {
      id: number,
      name: string,
    };
    createdDate: Date;
    modifiedDate: Date
  }
  teamB!: {
    id: number,
    name: string,
    country: {
      id: number,
      name: string,
    };
    createdDate: Date,
    modifiedDate: Date,
  }
  oddsA!: number;
  oddsB!: number;
  scoreA!: number;
  scoreB!: number;
  weather!: string;
  status!: string;
  isEnabled!: boolean;
  startDate!: Date;
  endDate!: Date;
  createdDate!: Date;
  modifiedDate!: Date;
  cancelled!: boolean;
  notStarted!: boolean;
  scheduled!: boolean;
  started!: boolean;
  over!: boolean;

  constructor() {

  }
}
//   constructor(data: any) {
//     this.id = data.id;
//     this.id_team_a = data.teamA.id;
//     this.name_team_a = data.teamA.name;
//     this.id_team_b = data.teamB.id;
//     this.name_team_b = data.teamB.name;
//     this.odds_a = data.oddsA;
//     this.odds_b = data.oddsB;
//     this.score_a = data.scoreA;
//     this.score_b = data.scoreB;
//     this.status = data.status;
//     this.weather = data.weather;
//     this.start_date = data.startDate;
//     this.end_date = data.endDate;
//    }

//    serialize() {
//     return {
//       id : this.id,
//       id_team_a : this.id_team_a,
//       name_team_a : this.name_team_a,
//       id_team_b : this.id_team_b,
//       name_team_b : this.name_team_b,
//       odds_a : this.odds_a,
//       odds_b : this.odds_b,
//       score_a : this.score_a,
//       score_b : this.score_b,
//       status : this.status,
//       weather : this.weather,
//       start_date : this.start_date,
//       end_date : this.end_date
//     }
//   }

//    deserialize(data: any) {
//     this.id = data.id;
//     this.id_team_a = data.teamA.id;
//     this.name_team_a = data.teamA.name;
//     this.id_team_b = data.teamB.id;
//     this.name_team_b = data.teamB.name;
//     this.odds_a = data.oddsA;
//     this.odds_b = data.oddsB;
//     this.score_a = data.scoreA;
//     this.score_b = data.scoreB;
//     this.status = data.status;
//     this.weather = data.weather;
//     this.start_date = data.startDate;
//     this.end_date = data.endDate;
//    }
// }


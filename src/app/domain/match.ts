export class Match {
  public id!: number;
  public teamA!: {
    id: number,
    name: string,
    country: {
      id: number,
      name: string,
    };
    createdDate: Date;
    modifiedDate: Date
  }
  public teamB!: {
    id: number,
    name: string,
    country: {
      id: number,
      name: string,
    };
    createdDate: Date,
    modifiedDate: Date,
  }
  public oddsA!: number;
  public oddsB!: number;
  public scoreA!: number;
  public scoreB!: number;
  public weather!: string;
  public status!: string;
  public isEnabled!: boolean;
  public startDate!: Date;
  public endDate!: Date;
  public createdDate!: Date;
  public modifiedDate!: Date;
  public cancelled!: boolean;
  public notStarted!: boolean;
  public scheduled!: boolean;
  public started!: boolean;
  public over!: boolean;


  constructor(data: any) {
    this.id = data.id;
    this.teamA.id = data.teamA.id;
    this.teamA.name = data.teamA.name;
    this.teamA.country.id = data.teamA.country.id;
    this.teamA.country.name = data.teamA.country.name;
    this.teamB.name = data.teamA.createdDate;
    this.teamB.name = data.teamA.modifiedDate;
    this.teamB.id = data.teamB.id;
    this.teamB.name = data.teamB.name;
    this.teamB.country.id = data.teamB.country.id;
    this.teamB.country.name = data.teamB.country.name;
    this.teamB.name = data.teamB.createdDate;
    this.teamB.name = data.teamB.modifiedDate;
    this.oddsA = data.oddsA;
    this.oddsB = data.oddsB;
    this.scoreA = data.scoreA;
    this.scoreB = data.scoreB;
    this.weather = data.weather;
    this.status = data.status;
    this.isEnabled = data.isEnabled;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.createdDate = data.createdDate;
    this.modifiedDate = data.modifiedDate;
    this.cancelled = data.cancelled;
    this.notStarted = data.notStarted;
    this.scheduled = data.scheduled;
    this.started = data.started;
    this.over = data.over;
  }

  deserialize(data: any) {
    this.id = data.id;
    this.teamA.id = data.teamA.id;
    this.teamA.name = data.teamA.name;
    this.teamA.country.id = data.teamA.country.id;
    this.teamA.country.name = data.teamA.country.name;
    this.teamA.createdDate = data.teamA.createdDate;
    this.teamA.modifiedDate = data.teamA.modifiedDate;
    this.teamB.id = data.teamB.id;
    this.teamB.name = data.teamB.name;
    this.teamB.country.id = data.teamB.country.id;
    this.teamB.country.name = data.teamB.country.name;
    this.teamB.createdDate = data.teamB.createdDate;
    this.teamB.modifiedDate = data.teamB.modifiedDate;
    this.oddsA = data.oddsA;
    this.oddsB = data.oddsB;
    this.scoreA = data.scoreA;
    this.scoreB = data.scoreB;
    this.weather = data.weather;
    this.status = data.status;
    this.isEnabled = data.isEnabled;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.createdDate = data.createdDate;
    this.modifiedDate = data.modifiedDate;
    this.cancelled = data.cancelled;
    this.notStarted = data.notStarted;
    this.scheduled = data.scheduled;
    this.started = data.started;
    this.over = data.over;
  }


  serialize(): any {
    return {
      id: this.id,
      teamA: {
        id: this.teamA.id,
        name: this.teamA.name,
        country: {
            id: this.teamA.country.id,
            name: this.teamA.country.name
        },
        createdDate: this.teamA.createdDate,
        modifiedDate: this.teamA.modifiedDate
      },
      teamB: {
        id: this.teamB.id,
        name: this.teamB.name,
        country: {
          id: this.teamB.country.id,
          name: this.teamB.country.name
        },
        createdDate: this.teamB.createdDate,
        modifiedDate: this.teamB.modifiedDate
      },
      oddsA: this.oddsA,
      oddsB: this.oddsB,
      scoreA: this.scoreA,
      scoreB: this.scoreB,
      weather: this.weather,
      status: this.status,
      isEnabled: this.isEnabled,
      startDate: this.startDate,
      endDate: this.endDate,
      createdDate: this.createdDate,
      modifiedDate: this.modifiedDate,
      cancelled: this.cancelled,
      notStarted: this.notStarted,
      scheduled: this.scheduled,
      started: this.started,
      over: this.over
    }
  }
}

import { Bet } from './bet'

export class User {
  id!: number;
  email!: string;
  password!: string;
  lastname!: string;
  firstname!: string;
  role!: Roles;
  idEnabled!: boolean;
  isPwdChecked!: boolean;
  betslip!: Array<Bet>;
}
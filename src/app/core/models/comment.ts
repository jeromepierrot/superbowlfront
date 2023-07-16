import { Commentator } from "src/app/core/models/commentator";

export class Comment {
  public id!: number;
  public commentator!: Commentator;
  public postContent!: string;
  public postDate!: string;
  public editDate!: string;
}
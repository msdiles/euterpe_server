import { IsNotEmpty } from 'class-validator';

export interface Word {
  id: string;
  title: string;
  meaning: string;
}

export class CreateWord {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly meaning: string;
}

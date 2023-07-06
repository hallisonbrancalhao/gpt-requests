import { IsString, IsNotEmpty } from 'class-validator';

export class ArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  shortDescription: string;

  @IsString()
  content: string;
}

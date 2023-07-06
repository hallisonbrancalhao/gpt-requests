import { IsString, IsNotEmpty, IsBoolean, IsArray } from 'class-validator';

export class ArticleResponseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  shortDescription: string;

  @IsString()
  content: string;

  @IsString({ each: true })
  @IsArray()
  tags: string;

  @IsString()
  mesmoSentido: string;
}

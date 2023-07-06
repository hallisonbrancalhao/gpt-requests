import { Body, Controller, Post } from '@nestjs/common';
import { ArticleDto } from './dto/articles.dto';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Post('/refactor')
  refactorArticle(@Body() data: ArticleDto) {
    return this.articlesService.refactorArticle(data);
  }
}

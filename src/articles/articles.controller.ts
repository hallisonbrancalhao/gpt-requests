import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ArticleDto } from './dto/articles.dto';
import { ArticlesService } from './articles.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Post('/refactor')
  refactorArticle(@Body() data: ArticleDto) {
    return this.articlesService.refactorArticle(data);
  }
}

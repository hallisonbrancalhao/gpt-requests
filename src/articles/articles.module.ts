import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { ChatGptService } from './chat-gpt.service';

@Module({
  imports: [],
  controllers: [ArticlesController],
  providers: [ArticlesService, ChatGptService],
})
export class ArticlesModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ArticlesModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}

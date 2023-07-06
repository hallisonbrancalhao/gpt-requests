import { Injectable, ParseBoolPipe } from '@nestjs/common';
import { ArticleDto } from './dto/articles.dto';
import { ArticleResponseDto } from './dto/articles-response.dto';
import { ChatGptService } from './chat-gpt.service';

@Injectable()
export class ArticlesService {
  constructor(private chatGptService: ChatGptService) {}

  public async refactorArticle(
    articleDto: ArticleDto,
  ): Promise<ArticleResponseDto> {
    const responseDto = new ArticleResponseDto();

    responseDto.title = await this.chatGptService.generateResponse(
      `Escreva em outras palavras sem perder o sentido a seguinte afirmação: ${articleDto.title}`,
      50,
    );

    responseDto.shortDescription = await this.chatGptService.generateResponse(
      `Escreva em outras palavras sem perder o sentido a seguinte afirmação: ${articleDto.shortDescription}`,
      200,
    );

    responseDto.content = await this.chatGptService.generateResponse(
      `Reescreva sem perder o sentido, com 800 palavras em média, colocando em uma estrutura de html com tags "h2, p, ul, li" o seguitne conteúdo: ${articleDto.content}. `,
      800,
    );

    responseDto.tags = await this.createTags(
      responseDto.title,
      responseDto.shortDescription,
    );

    responseDto.mesmoSentido = await this.validate(
      articleDto.content,
      responseDto.content,
    );

    return responseDto;
  }

  private async validate(original: string, gerado: string) {
    return await this.chatGptService
      .generateResponse(
        `
      faça uma validação de congruência e se há o mesmo sentido entre as informações presentes nos seguitnes textos:
      PRIMEIRO: ${original}.
      SEGUNDO: ${gerado}.

      me retorne apenas "true" ou "false"
    `,
        10,
      )
      .then((res) => res);
  }

  private async createTags(title: string, shortDescription: string) {
    return await this.chatGptService
      .generateResponse(
        `Crie uma sequencia de palavras chaves referentes ao texto: ${shortDescription}`,
        50,
      )
      .then((tags) => tags);
  }
}

import { Injectable, ParseBoolPipe } from '@nestjs/common';
import { ArticleDto } from './dto/articles.dto';
import { ChatGptService } from './chat-gpt.service';

@Injectable()
export class ArticlesService {
  constructor(private chatGptService: ChatGptService) {}

  public async refactorArticle(articleDto: ArticleDto) {
    const responseStr = await this.chatGptService.generateResponse(
      `
      construa um objeto com a estrutura:
      {
        "title": string,
        "shortDescription": string,
        "content": string,
        "tags": string
      }

      preencha os campos da seguinte forma:
      1) No campo "title" reescreva o seguinte texto: "${articleDto.title}" com o mesmo sentido e com palavras diferentes;
      2) No campo "shortDescription" reescreva o seguinte texto: "${articleDto.shortDescription}" com o mesmo sentido e com palavras diferentes;
      3) No campo "content" faça uma descriçao seguindo um modelo de um artigo noticiário com 600 palavras,do seguinte texto: "${articleDto.content}, cuidado para nao colocar elementos que quebram um JSON";
      4) No campo "tags" verifique o seguinte texto: "${articleDto.content}" e crie uma sequencia de palavras relevantes deste conteúdo.
    `,
      1200,
    );
    const responseJson = JSON.parse(responseStr);
    return responseJson;
  }
}

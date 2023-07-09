# Documentação - Readme.md

Este arquivo Readme.md fornece informações sobre as classes `ArticlesController` e `ArticlesService` presentes no código fornecido.

## ArticlesController

A classe `ArticlesController` é responsável por lidar com as requisições relacionadas a artigos. Ela possui um decorator `@Controller('articles')` para definir o prefixo de rota "/articles" para todas as rotas dentro do controlador. Além disso, o decorator `@UseGuards(AuthGuard)` é usado para aplicar um guarda de autenticação em todas as rotas do controlador.

### Métodos

#### refactorArticle

```typescript
@Post('/refactor')
refactorArticle(@Body() data: ArticleDto)
```

- Descrição: Este método é responsável por receber uma requisição POST para refatorar um artigo. Ele chama o serviço `ArticlesService` para realizar a refatoração.
- Parâmetros:
  - `data` (corpo da requisição): Um objeto `ArticleDto` que contém os dados do artigo a ser refatorado.
- Retorno: O método retorna o resultado da refatoração realizada pelo serviço `ArticlesService`.

## ArticlesService

A classe `ArticlesService` é responsável por fornecer os serviços relacionados a artigos. Ela possui uma dependência `ChatGptService` injetada por meio de sua classe construtora.


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

### Métodos

#### refactorArticle

```typescript
public async refactorArticle(articleDto: ArticleDto)
```

- Descrição: Este método é responsável por refatorar um artigo com base nos dados fornecidos. Ele chama o método `generateResponse` do serviço `ChatGptService` para gerar uma resposta refatorada.
- Parâmetros:
  - `articleDto`: Um objeto `ArticleDto` que contém os dados do artigo a ser refatorado.
- Retorno: O método retorna um objeto JSON com os campos do artigo refatorado.

#### Observações

- O método `refactorArticle` faz uso do serviço `ChatGptService` para gerar uma resposta refatorada. O serviço é responsável por chamar uma API de geração de texto com base em uma determinada entrada.
- O método `refactorArticle` gera uma entrada para a API de geração de texto com base nos dados fornecidos em `articleDto` e aguarda a resposta da API.
- A resposta da API é convertida de uma string para um objeto JSON e retornada como resultado da refatoração.

## Considerações Finais

Este arquivo Readme.md fornece uma visão geral das classes `ArticlesController` e `ArticlesService` e de seus métodos. Ele pode ser utilizado como referência para entender a estrutura e o propósito dessas classes no contexto do projeto em questão.
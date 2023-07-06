import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatGptService {
  public async generateResponse(
    prompt: string,
    max_tokens: number,
  ): Promise<string> {
    const { Configuration, OpenAIApi } = require('openai');

    try {
      const configuration = new Configuration({
        apiKey: process.env.GPT_API_TOKEN,
      });
      const openai = new OpenAIApi(configuration);

      const completion = await openai
        .createCompletion({
          model: 'text-davinci-003',
          prompt: prompt,
          temperature: 1.0,
          max_tokens: max_tokens,
        })
        .catch((error) => {
          console.log(`OPENAI ERR: ${error.message}`);
        });
      const answer = completion.data.choices[0].text.trim();
      return answer;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

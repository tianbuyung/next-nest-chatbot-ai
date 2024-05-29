import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';

import { ChatCompletionsMessageDto } from './dto/create-chat-completions.request';

@Injectable()
export class OpenaiService {
  constructor(private readonly openai: OpenAI) {}

  async createChatCompletions(messages: ChatCompletionsMessageDto[]) {
    return this.openai.chat.completions.create({
      messages: messages as ChatCompletionMessageParam[],
      model: 'gpt-4o',
    });
  }
}

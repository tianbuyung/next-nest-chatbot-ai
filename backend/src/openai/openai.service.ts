import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';

import { ChatCompletionsMessageDto } from './dto/create-chat-completions.request';
import { ConfigurationsService } from '../configurations/configurations.service';

@Injectable()
export class OpenaiService {
  constructor(
    private readonly openai: OpenAI,
    private readonly configurationsService: ConfigurationsService,
  ) {}

  async createChatCompletions(messages: ChatCompletionsMessageDto[]) {
    return this.openai.chat.completions.create({
      messages: messages as ChatCompletionMessageParam[],
      model: this.configurationsService.getOpenaiModelName(),
    });
  }
}

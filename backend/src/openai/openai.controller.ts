import { Body, Controller, Post } from '@nestjs/common';

import { CreateChatCompletionsRequest } from './dto/create-chat-completions.request';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post('chat-completions')
  async createChatCompletions(@Body() body: CreateChatCompletionsRequest) {
    return this.openaiService.createChatCompletions(body.messages);
  }
}

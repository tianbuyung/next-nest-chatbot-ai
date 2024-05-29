import { Module } from '@nestjs/common';
import OpenAI from 'openai';

import { OpenaiController } from './openai.controller';
import { OpenaiService } from './openai.service';
import { ConfigurationsService } from '../configurations/configurations.service';

@Module({
  controllers: [OpenaiController],
  providers: [
    OpenaiService,
    {
      provide: OpenAI,
      useFactory: (configurationsService: ConfigurationsService) =>
        new OpenAI({
          apiKey: configurationsService.getOpenaiApiKey(),
        }),
      inject: [ConfigurationsService],
    },
  ],
})
export class OpenaiModule {}

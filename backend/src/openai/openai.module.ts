import { Module } from '@nestjs/common';
import OpenAI from 'openai';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { OpenaiController } from './openai.controller';
import { OpenaiService } from './openai.service';

@Module({
  controllers: [OpenaiController],
  providers: [
    OpenaiService,
    {
      provide: OpenAI,
      useFactory: (configService: ConfigService) =>
        new OpenAI({
          apiKey: configService.getOrThrow('OPENAI_API_KEY'),
        }),
      inject: [ConfigService],
    },
  ],
  imports: [ConfigModule],
})
export class OpenaiModule {}

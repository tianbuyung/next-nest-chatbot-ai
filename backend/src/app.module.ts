import { Module } from '@nestjs/common';

import { OpenaiModule } from './openai/openai.module';
import { ConfigurationsModule } from './configurations/configurations.module';

@Module({
  imports: [OpenaiModule, ConfigurationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

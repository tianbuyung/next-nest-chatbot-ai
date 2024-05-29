import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenaiModule } from './openai/openai.module';
import { ConfigurationsModule } from './configurations/configurations.module';

@Module({
  imports: [ConfigModule.forRoot(), OpenaiModule, ConfigurationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

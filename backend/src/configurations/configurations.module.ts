import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ConfigurationsService } from './configurations.service';

@Global()
@Module({
  providers: [ConfigurationsService],
  imports: [ConfigModule.forRoot()],
  exports: [ConfigurationsService],
})
export class ConfigurationsModule {}

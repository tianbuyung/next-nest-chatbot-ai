import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationsService {
  constructor(private readonly configService: ConfigService) {}

  private getOrThrow(key: string) {
    return this.configService.getOrThrow<string>(key);
  }

  getPort() {
    return this.getOrThrow('PORT');
  }

  getOpenaiApiKey() {
    return this.getOrThrow('OPENAI_API_KEY');
  }

  getOpenaiModelName() {
    return this.getOrThrow('OPENAI_MODEL_NAME');
  }
}

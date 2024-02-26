import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class SwaggerConfig {
  static setup(app: NestFastifyApplication): void {
    const config = new DocumentBuilder()
      .setTitle('Skeelo example')
      .setDescription('The Challenge Skeelo API description')
      .setVersion('0.0.1')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }
}

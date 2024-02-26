import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { SwaggerConfig } from './docs/swagger-config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  SwaggerConfig.setup(app);

  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('PORT');
  const host = config.get<string>('HOST');

  await app.listen(port, host);
}
bootstrap();

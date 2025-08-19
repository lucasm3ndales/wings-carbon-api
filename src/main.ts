import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { I18nValidationPipe } from 'nestjs-i18n';


function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Wings Carbon API')
    .setDescription("I don't have a good description to this API.")
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);
}

function setupValidationPipe(app: INestApplication): void {
  app.useGlobalPipes(
    new I18nValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const configService = app.get(ConfigService);
  const port = configService.get<number>('APP_PORT') || 3000;

  setupSwagger(app);
  setupValidationPipe(app);

  await app.listen(port);
  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`📄 Swagger documentation is available at: http://localhost:${port}/docs`);
}
bootstrap();
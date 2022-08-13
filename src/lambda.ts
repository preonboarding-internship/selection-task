import { configure as serverlessExpress } from '@vendia/serverless-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

let cachedServer;

export const handler = async (event, context) => {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule, {
      cors: true,
      logger: ['log', 'error', 'warn', 'debug'],
    });
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    const config = new DocumentBuilder()
      .setTitle('Pre Onboard API')
      .setDescription('원티드 프리온보딩 사전과제용 API입니다.')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
    await app.init();

    cachedServer = serverlessExpress({
      app: app.getHttpAdapter().getInstance(),
    });
  }

  return cachedServer(event, context);
};

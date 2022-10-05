import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
dotenv.config();
import { AppModule } from './app.module';

async function bootstrap() {
  const server = express();
  const adapter = new ExpressAdapter(server);
  const app = await NestFactory.create(AppModule, adapter, {
    cors: true,
    logger: ['log', 'error', 'warn', 'debug'],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.init();

  const port = process.env.PORT || 8000;
  http.createServer(server).listen(port);
  console.info('server is running on ', port);

  const httpsPort = process.env.HTTPS_PORT;
  if (httpsPort) {
    const httpsOptions = {
      ca: fs.readFileSync(__dirname + '/../ssl/ca_bundle.crt'),
      key: fs.readFileSync(__dirname + '/../ssl/private.key'),
      cert: fs.readFileSync(__dirname + '/../ssl/certificate.crt'),
    };
    https.createServer(httpsOptions, server).listen(httpsPort);
    console.info('server is running on ', httpsPort);
  }
}
bootstrap();

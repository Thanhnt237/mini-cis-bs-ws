import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import constants from './common/constants/constants';
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppConfigService } from "./config/app/config.service";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  const appConfig: AppConfigService = app.get(AppConfigService);

  /**
   * @description Global Middleware
   */
  app.use(cookieParser(appConfig.cookie_secret));
  app.enableCors();

  /**
   * @description Global pipes
   */
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    skipUndefinedProperties: true,
    transform: true
  }))

  /**
   * @description Global Prefix
   */
  app.setGlobalPrefix(constants.GLOBAL_PREFIX)

  await app.listen(8080);
}
bootstrap();

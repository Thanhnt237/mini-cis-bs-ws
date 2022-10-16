import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { LoggerApiMiddleware } from "./common/middlewares/logging-api.middleware";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "./common/exceptions/filter/http-exception.filter";
import { DatabasesProvidersModule } from "./providers/databases/index.provider.module";
import { LoggerModule } from "./common/utils/logger/iLogger.module";
import { AppConfigModule } from "./config/app/config.module";
import { AllAppModule } from "./common/constants/all-app.module";

@Module({
  imports: [
    AppConfigModule,
    DatabasesProvidersModule,
    LoggerModule,
    AllAppModule
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    }
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerApiMiddleware).forRoutes('*')
  }
}

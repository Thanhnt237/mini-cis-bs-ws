import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { MysqlConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration]
        }),
    ],
    providers: [ConfigService, MysqlConfigService],
    exports: [ConfigService, MysqlConfigService],
})
export class MysqlConfigModule {}
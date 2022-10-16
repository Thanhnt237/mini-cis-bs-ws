import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MysqlConfigService {

    constructor(
        private configService: ConfigService
    ) {}

    get env(): string {
        return this.configService.get<string>('mysql.env');
    }

    get host(): string {
        return this.configService.get<string>('mysql.host');
    }

    get port(): number {
        return Number(this.configService.get<number>('mysql.port'));
    }

    get username(): string {
        return this.configService.get<string>('mysql.username');
    }

    get password(): string {
        return this.configService.get<string>('mysql.password');
    }

    get database(): string {
        return this.configService.get<string>('mysql.database');
    }
}
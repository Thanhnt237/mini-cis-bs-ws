import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UsersEntity} from "../users/entities/users.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: "username"
        });
    }

    async validate(UserName: string, Password: string): Promise<UsersEntity> {
        const user = await this.authService.validateUsers({UserName, Password});
        if (!user) {
            throw new UnauthorizedException('Unknown error');
        }
        return user;
    }
}
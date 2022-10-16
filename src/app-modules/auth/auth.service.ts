import {Injectable, UnauthorizedException} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import {LoginInputDTO, SignUpDTO} from "./dto/auth.dto";
import {JwtStrategyHelper} from "./helpers/jwt-strategy.helper";
import {UsersEntity} from "../users/entities/users.entity";
import { checkComparePassword } from "../../common/helpers/hashing-password.helper";

@Injectable()
export class AuthService{
    constructor(
        private readonly userService: UsersService,
        private readonly jwtHelper: JwtStrategyHelper
    ) {}

    async validateUsers(input: LoginInputDTO): Promise<UsersEntity>{
        let result = await this.userService.getUser(input)
        if(!result.length) throw new UnauthorizedException('Invalid Username')

        let user = result[0]
        let compareResult = await checkComparePassword(input.Password, user.Password)
        if(!compareResult) throw new UnauthorizedException('Invalid Password')
        return user
    }

    async login(user: UsersEntity): Promise<any>{
        let [accessToken, refreshToken] = await this.jwtHelper.createTokens(user)
        return {accessToken, refreshToken}
    }

    async signUp(input: SignUpDTO): Promise<any>{
        let addNewUserResult = await this.userService.addNewUser([input])
        let addedUser = addNewUserResult[0]
        let [accessToken, refreshToken] = await this.jwtHelper.createTokens(addedUser)
        return { accessToken, refreshToken, addedUser }
    }
}
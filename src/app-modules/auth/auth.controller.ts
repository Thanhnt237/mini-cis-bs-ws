import {
    Body,
    Controller,
    Post,
    Res,
    Request,
    UseGuards,
    UseInterceptors, ClassSerializerInterceptor, SerializeOptions
} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {SignUpDTO} from "./dto/auth.dto";
import {LocalAuthGuard} from "../../common/guards/local-auth.guard";
import {Response} from "express";
import {Public} from "../../common/decorators/api.decorator";
import { LoginSerializer, SignUpSerializer } from "./serializers/auth.serializer";
import { endpoint } from "../../common/constants/endpoint";

@UseInterceptors(ClassSerializerInterceptor)
@Controller(endpoint.auth_prefix)
export class AuthController{

    constructor(
        private readonly authService: AuthService
    ) {}

    @Post(endpoint.auth_login)
    @UseGuards(LocalAuthGuard)
    async Login(
        @Res({passthrough: true}) response: Response,
        @Request() req
    ): Promise<LoginSerializer>{
        let {accessToken, refreshToken} = await this.authService.login(req.user)

        response.cookie('refresh-token', refreshToken, {
            httpOnly: true,
            secure: true
        })

        return new LoginSerializer({accessToken, user: req.user})
    }

    @Public()
    @Post(endpoint.auth_signUp)
    @SerializeOptions({
        exposeUnsetFields: true
    })
    async SignUp(
        @Res({passthrough: true}) response: Response,
        @Body() input: SignUpDTO
    ): Promise<SignUpSerializer>{
        console.log(input)
        return
        let { accessToken, refreshToken, addedUser } = await this.authService.signUp(input)

        response.cookie('refresh-token', refreshToken, {
            httpOnly: true,
            secure: true
        })

        return new SignUpSerializer({accessToken, user: addedUser})
    }
}
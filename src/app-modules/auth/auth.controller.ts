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
import { LoginInputDTO, SignUpDTO } from "./dto/auth.dto";
import {Response} from "express";
import {Public} from "../../common/decorators/api.decorator";
import { LoginSerializer, SignUpSerializer } from "./serializers/auth.serializer";
import { endpoint } from "../../common/constants/endpoint";
import { ApiBadRequestResponse, ApiResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { apiTag } from "./tags/api-tag";
import { ErrorFormatDto } from "../../common/dto/error-format.dto";

@UseInterceptors(ClassSerializerInterceptor)
@Controller(endpoint.auth_prefix)
@ApiTags(apiTag.Authentication)
@ApiUnauthorizedResponse({
    description: "Unauthorized",
    type: ErrorFormatDto
})
@ApiBadRequestResponse({
    description: "Bad request",
    type:ErrorFormatDto
})
export class AuthController{

    constructor(
        private readonly authService: AuthService
    ) {}

    @Post(endpoint.auth_login)

    @ApiResponse({
        status: 201,
        description: "success",
        type: LoginSerializer
    })
    async Login(
        @Body() input : LoginInputDTO,
        @Res({passthrough: true}) response: Response
    ): Promise<LoginSerializer>{
        let user = await this.authService.validateUsers(input)

        let {accessToken, refreshToken} = await this.authService.login(user)

        response.cookie('refresh-token', refreshToken, {
            httpOnly: true,
            secure: true
        })

        return new LoginSerializer({accessToken, user: user})
    }

    @Public()
    @Post(endpoint.auth_signUp)
    @SerializeOptions({
        exposeUnsetFields: true
    })
    @ApiResponse({
        status: 201,
        description: "success",
        type: SignUpDTO
    })
    async SignUp(
        @Res({passthrough: true}) response: Response,
        @Body() input: SignUpDTO
    ): Promise<SignUpSerializer>{
        let { accessToken, refreshToken, addedUser } = await this.authService.signUp(input)

        response.cookie('refresh-token', refreshToken, {
            httpOnly: true,
            secure: true
        })

        return new SignUpSerializer({accessToken, user: addedUser})
    }
}
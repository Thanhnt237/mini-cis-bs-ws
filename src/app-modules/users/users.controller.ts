import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get, Param,
    ParseArrayPipe,
    Post, Put,
    Query, SerializeOptions,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";

import {UserSerializer} from './serializers/user.serializer';

import {UsersService} from "./users.service";
import { AddNewUserDTO } from "./dto/users.dto";
import {Cookies} from "../../common/decorators/cookies-parser.decorator";
import {transformArrayEntitiesToSerializer} from "../../common/helpers/transform-serializer.helper";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";
import { FindByIDDto } from "../../common/dto/findOne.dto";
import { UpdateUserDTO } from "./dto/update-users.dto";
import { endpoint } from "../../common/constants/endpoint";
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { apiTag } from "./constants/api-tag";
import { ErrorFormatDto } from "../../common/dto/error-format.dto";


// @UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
@Controller(endpoint.users_prefix)
@ApiTags(apiTag.Users)
@ApiBearerAuth()
@ApiUnauthorizedResponse({
    description: "Unauthorized",
    type: ErrorFormatDto
})
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @ApiOkResponse({
        description: "All users record",
        type: UserSerializer,
        isArray: true
    })
    @Post(endpoint.users_get_all_user)
    async getAllUser(): Promise<Array<UserSerializer>> {
        return transformArrayEntitiesToSerializer(await this.usersService.getAllUsers(), UserSerializer)
    }

    @Post(endpoint.users_get_user_by_ID)
    @ApiOkResponse({
        description: "All users record",
        type: UserSerializer,
        isArray: true
    })
    async getUserByID(
        @Body() input: FindByIDDto,
    ): Promise<Array<UserSerializer>>{
        return transformArrayEntitiesToSerializer(await this.usersService.getUser(input), UserSerializer)
    }

    @ApiBody({
        type: AddNewUserDTO
    })
    @Post(endpoint.users_add_new_user)
    async addNewUser(
        @Body('data', new ParseArrayPipe({ items: AddNewUserDTO }))
        data: AddNewUserDTO[]
    ): Promise<UserSerializer> {
        return new UserSerializer(await this.usersService.addNewUser(data))
    }

    @Post(endpoint.users_update_user)
    async updateUser(
      @Body() input: UpdateUserDTO
    ): Promise<any>{
        return this.usersService.updateUser(input)
    }

    @Post('test')
    test(
       @Body() input: UpdateUserDTO
    ): UserSerializer{
        console.log(input)
        return
        // return {
        //     ID: "123312",
        //     name: "thanh dep trai",
        //     email: "thanhnt@bytesoft.net",
        //     password: "fack",
        //     createdAt: new Date(),
        //     updatedAt: new Date()
        // }
    }
}
import {Injectable, UseGuards} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UsersRepository} from './users.repository';
import {CreateUserDTO, UserDto} from "./dto/users.dto";
import {UsersEntity} from "./entities/users.entity";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";
import { hashingPassword } from "../../common/helpers/hashing-password.helper";
import { UpdateUserDTO } from "./dto/update-users.dto";

@Injectable()
@UseGuards(JwtAuthGuard)
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository)
        private readonly usersRepository: UsersRepository
    ) {}

    async getAllUsers(): Promise<Array<UsersEntity>>{
        return await this.usersRepository.getUser()
    }

    async getUser(
        input: UserDto
    ): Promise<Array<UsersEntity>> {
        return await this.usersRepository.getUser(input)
    }

    async addNewUser(input: Array<CreateUserDTO>): Promise<UsersEntity> {
        for (const items of input) {
            items.Password = await hashingPassword(items.Password)
        }
        return await this.usersRepository.addNewUser(input)
    }

    async updateUser(
        data: UpdateUserDTO
    ): Promise<any>{
        if(data.Password){
            data.Password = await hashingPassword(data.Password)
        }

        let standardInput = {
            condition: {
                ID: data.ID
            },
            data
        }
        return await this.usersRepository.updateUser(standardInput)
    }

}
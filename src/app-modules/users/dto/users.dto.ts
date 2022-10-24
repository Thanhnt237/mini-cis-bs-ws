import {Allow, IsEmail, IsNotEmpty, IsString} from 'class-validator';
import { Expose, Type } from "class-transformer";
import { UsersInterface } from "../interfaces/users.interface";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto implements UsersInterface{
    @ApiProperty()
    readonly ID?: string | Promise<string>

    @ApiProperty()
    readonly Email?: string;
    @ApiProperty()
    readonly Name?: string | null;

    readonly Password?: string;
    @ApiProperty()
    readonly Phone?: string;
    @ApiProperty()
    readonly Role?: string;
    @ApiProperty()
    readonly Room_ID?: string;
    @ApiProperty()
    readonly Speciality?: string;
    @ApiProperty()
    readonly UserName?: string;
}

export class AddNewUserDTO implements UsersInterface{
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    readonly Email: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly Name: string | null;

    @IsNotEmpty()
    @ApiProperty()
    readonly Password: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly Phone: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly Role: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly Room_ID: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly Speciality: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly UserName: string;
}

export class CreateUserDTO implements UsersInterface{

    readonly ID?: string

    @IsEmail()
    readonly Email?: string;
    readonly Name?: string | null;
    Password?: string;
    readonly Phone?: string;
    readonly Role?: string;
    readonly Room_ID?: string;
    readonly Speciality?: string;
    readonly UserName?: string;
}

export class GetAllUserDto {
    @Allow()
    @ApiProperty()
    readonly search_string: string
}
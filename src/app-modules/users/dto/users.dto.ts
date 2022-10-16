import {IsEmail, IsNotEmpty, IsString} from 'class-validator';
import { Expose, Type } from "class-transformer";
import { UsersInterface } from "../interfaces/users.interface";

export class UserDto implements UsersInterface{
    readonly ID?: string | Promise<string>

    @IsEmail()
    readonly email?: string

    readonly password?: string
    readonly name?: string
    readonly Email?: string;
    readonly Name?: string | null;
    readonly Password?: string;
    readonly Phone?: string;
    readonly Role?: string;
    readonly Room_ID?: string;
    readonly Speciality?: string;
    readonly UserName?: string;
}

export class AddNewUserDTO implements UsersInterface{
    @IsNotEmpty()
    @IsEmail()
    readonly Email: string;

    @IsNotEmpty()
    readonly Name: string | null;

    @IsNotEmpty()
    readonly Password: string;

    @IsNotEmpty()
    readonly Phone: string;

    @IsNotEmpty()
    readonly Role: string;

    @IsNotEmpty()
    readonly Room_ID: string;

    @IsNotEmpty()
    readonly Speciality: string;

    @IsNotEmpty()
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
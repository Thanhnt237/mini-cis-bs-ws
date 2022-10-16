import {Exclude} from 'class-transformer';
import { UsersInterface } from "../interfaces/users.interface";

export class UserSerializer implements UsersInterface {
    ID: string;

    Email: string;

    Name: null | string;

    UserName: string

    @Exclude()
    Password: string;

    Phone: string

    Role: string

    Speciality: string

    Room_ID: string

    CreatedAt: Date;

    UpdatedAt: Date;

    IsActive: boolean

    Lock: boolean

    constructor(partial: Partial<UserSerializer>) {
        Object.assign(this, partial);
    }
}
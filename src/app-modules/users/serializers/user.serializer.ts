import { Exclude, Type } from "class-transformer";
import { UsersInterface } from "../interfaces/users.interface";
import { ApiProperty } from "@nestjs/swagger";
import { Allow } from "class-validator";
import { RoomSerializers } from "../../rooms/serializers/room.serializers";

export class UserSerializer implements UsersInterface {
    @ApiProperty()
    @Allow()
    ID: string;

    @ApiProperty()
    @Allow()
    Email: string;

    @ApiProperty()
    @Allow()
    Name: null | string;

    @ApiProperty()
    @Allow()
    UserName: string

    @Exclude()
    Password: string;

    @ApiProperty()
    @Allow()
    Phone: string

    @ApiProperty()
    @Allow()
    Role: string

    @ApiProperty()
    @Allow()
    Speciality: string

    @ApiProperty()
    @Allow()
    Room_ID: string

    @ApiProperty()
    @Allow()
    @Type(() => RoomSerializers)
    Room?: RoomSerializers

    CreatedAt: Date;

    UpdatedAt: Date;

    @ApiProperty()
    @Allow()
    IsActive: boolean

    @ApiProperty()
    @Allow()
    Lock: boolean

    constructor(partial: Partial<UserSerializer>) {
        Object.assign(this, partial);
    }
}
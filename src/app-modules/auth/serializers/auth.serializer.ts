import { CommonAuthInterface } from "../interfaces/auth.interface";
import { UserSerializer } from "../../users/serializers/user.serializer";
import { Exclude, Transform, Type } from "class-transformer";
import { values } from "lodash";
import { ApiProperty } from "@nestjs/swagger";

export class SignUpSerializer implements CommonAuthInterface{
  @ApiProperty()
  accessToken: string

  @ApiProperty()
  @Type(() => UserSerializer)
  user: UserSerializer

  constructor(partial: Partial<SignUpSerializer>) {
    Object.assign(this, partial);
  }
}

export class LoginSerializer {
  @ApiProperty()
  accessToken: string

  @ApiProperty()
  @Type(() => UserSerializer)
  user: UserSerializer

  constructor(partial: Partial<SignUpSerializer>) {
    Object.assign(this, partial);
  }
}
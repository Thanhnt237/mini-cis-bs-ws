import { IsEmail, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class FindByIDDto{
  @ApiProperty({
    name: "id"
  })
  @IsNotEmpty()
  readonly ID: string
}

export class FindByEmail{
  @IsNotEmpty()
  @IsEmail()
  readonly email: string
}
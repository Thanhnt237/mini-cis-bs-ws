import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class RoomDto{
  @IsString()
  @ApiProperty()
  ID: string

  @ApiProperty()
  @IsString()
  name?: string
}

export class CreateRoomDto{
  @IsString()
  @ApiProperty()
  name: string
}

export class UpdateRoomDto{
  @IsString()
  @ApiProperty()
  name: string
}

export class AddNewRoomDto{
  @ApiProperty({
    type: [CreateRoomDto]
  })
  @Type(() => CreateRoomDto)
  data: CreateRoomDto[]
}
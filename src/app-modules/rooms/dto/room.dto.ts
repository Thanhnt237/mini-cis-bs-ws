import { IsString } from "class-validator";

export class RoomDto{
  @IsString()
  ID: string

  @IsString()
  name?: string
}

export class CreateRoomDto{
  @IsString()
  name: string
}

export class UpdateRoomDto{
  @IsString()
  name: string
}
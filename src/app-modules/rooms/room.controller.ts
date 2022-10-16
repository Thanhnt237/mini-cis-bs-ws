import { Body, Controller, Get, Param, ParseArrayPipe, Post, Put, Query } from "@nestjs/common";
import { endpoint } from "../../common/constants/endpoint";
import { transformArrayEntitiesToSerializer } from "../../common/helpers/transform-serializer.helper";
import { FindByIDDto } from "../../common/dto/findOne.dto";
import { RoomService } from "./room.service";
import { RoomSerializers } from "./serializers/room.serializers";
import { CreateRoomDto, UpdateRoomDto } from "./dto/room.dto";

@Controller(endpoint.rooms_prefix)
export class RoomController{
  constructor(
    private readonly roomService: RoomService
  ) {}

  @Get(endpoint.rooms_get_all_room)
  async getAllRooms(): Promise<Array<RoomSerializers>> {
    return transformArrayEntitiesToSerializer(await this.roomService.getRoom(), RoomSerializers)
  }

  @Get(endpoint.rooms_get_room_by_ID)
  async getRoomByID(
    @Query() input: FindByIDDto,
  ): Promise<Array<RoomSerializers>>{
    return transformArrayEntitiesToSerializer(await this.roomService.getRoom(input), RoomSerializers)
  }


  @Post(endpoint.rooms_add_new_room)
  async addNewRoom(
    @Body('data', new ParseArrayPipe({ items: CreateRoomDto }))
      data: CreateRoomDto[]
  ): Promise<RoomSerializers> {
    return new RoomSerializers(await this.roomService.createRoom(data))
  }

  @Put(endpoint.rooms_update_room)
  async updateRoom(
    @Param('ID') ID: string,
    @Body() input: UpdateRoomDto
  ): Promise<any>{
    return this.roomService.updateRoom(ID, input)
  }
}
import { Injectable, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { InjectRepository } from "@nestjs/typeorm";
import { RoomRepository } from "./room.repository";
import { CreateRoomDto, RoomDto, UpdateRoomDto } from "./dto/room.dto";
import { RoomEntity } from "./entities/room.entity";

@Injectable()
@UseGuards(JwtAuthGuard)
export class RoomService{
  constructor(
    @InjectRepository(RoomRepository)
    private readonly roomRepository: RoomRepository
  ) {}

  async getRoom(
    input?: RoomDto
  ): Promise<Array<RoomEntity>> {
    return await this.roomRepository.getRoom(input)
  }

  async createRoom(input: Array<CreateRoomDto>): Promise<RoomEntity> {
    return await this.roomRepository.createRoom(input)
  }

  async updateRoom(
    ID: string,
    data: UpdateRoomDto
  ): Promise<any>{
    let standardInput = {
      condition: {
        ID
      },
      data
    }
    return await this.roomRepository.updateRoom(standardInput)
  }
}
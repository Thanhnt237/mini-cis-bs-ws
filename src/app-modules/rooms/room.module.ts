import { Module } from "@nestjs/common";
import { RoomController } from "./room.controller";
import { RoomService } from "./room.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { iCommonModule } from "../../common/module/common-module/common.module";
import { RoomRepository } from "./room.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomRepository]),
    iCommonModule
  ],
  controllers: [RoomController],
  providers: [
    RoomService,
    RoomRepository
  ]
})
export class RoomModule{}
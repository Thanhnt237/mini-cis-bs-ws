import { Module } from "@nestjs/common";
import { AuthModule } from "../../app-modules/auth/auth.module";
import { UsersModule } from "../../app-modules/users/users.module";
import { PatientModule } from "../../app-modules/patient/patient.module";
import { RoomModule } from "../../app-modules/rooms/room.module";

const appModule = [
  AuthModule,
  UsersModule,
  PatientModule,
  RoomModule
]

@Module({
  imports: appModule,
  exports: appModule
})
export class AllAppModule{}
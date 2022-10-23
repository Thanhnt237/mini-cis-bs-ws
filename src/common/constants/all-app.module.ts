import { Module } from "@nestjs/common";
import { AuthModule } from "../../app-modules/auth/auth.module";
import { UsersModule } from "../../app-modules/users/users.module";
import { PatientModule } from "../../app-modules/patient/patient.module";
import { RoomModule } from "../../app-modules/rooms/room.module";
import { ExamModule } from "../../app-modules/exams/exam.module";
import { WelcomeModule } from "../../app-modules/welcomes/welcome.module";

const appModule = [
  AuthModule,
  UsersModule,
  PatientModule,
  RoomModule,
  ExamModule,
  WelcomeModule
]

@Module({
  imports: appModule,
  exports: appModule
})
export class AllAppModule{}
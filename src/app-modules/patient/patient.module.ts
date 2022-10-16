import { Module } from "@nestjs/common";
import { PatientController } from "./patient.controller";
import { PatientService } from "./patient.service";
import { PatientRepository } from "./patient.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersRepository } from "../users/users.repository";
import { iCommonModule } from "../../common/module/common-module/common.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository]),
    iCommonModule
  ],
  controllers: [PatientController],
  providers: [
    PatientService,
    PatientRepository
  ]
})
export class PatientModule{}

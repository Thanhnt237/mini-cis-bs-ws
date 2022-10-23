import { Module } from "@nestjs/common";
import { ExamController } from "./exam.controller";
import { ExamService } from "./exam.service";
import { ExamRepository } from "./exam.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExamEntity } from "./entities/exam.entity";
import { iCommonModule } from "../../common/module/common-module/common.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([ExamEntity]),
    iCommonModule
  ],
  controllers: [ExamController],
  providers: [
    ExamRepository,
    ExamService
  ]
})
export class ExamModule{

}
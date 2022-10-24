import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import {AddNewExamDto, GetAllExamDto, UpdateExamDto} from "./exam.dto";
import {ExamService} from "./exam.service";

@Controller()
@ApiTags('exam')
export class ExamController{

  constructor(
      private readonly examService: ExamService
  ) {
  }

  @Post('getAllExam')
  async getAll(
      @Body() input: GetAllExamDto
  ){
    return this.examService.getAll(input)
  }

  @Post('addNewExam')
  async newExam(
    @Body() input: AddNewExamDto
  ) {
    return this.examService.newExams(input)
  }

  @Post('updateExam')
  async update(
      @Body() input: UpdateExamDto
  ) {
    return this.examService.updateExams(input)
  }
}
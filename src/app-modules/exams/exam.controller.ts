import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AddNewExamDto } from "./exam.dto";

@Controller()
@ApiTags('exam')
export class ExamController{

  @Post('getAllExam')
  async getAll(){
    return
  }

  @Post('addNewExam')
  async newWelcome(
    @Body() input: AddNewExamDto
  ) {
    return
  }

}
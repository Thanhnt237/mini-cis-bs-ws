import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExamRepository } from "./exam.repository";

@Injectable()
export class ExamService{

  constructor(
    @InjectRepository(ExamRepository)
    private readonly examRepos: ExamRepository
  ) {
  }

  async getAll(input){
    return await this.examRepos.getAll(input)
  }

  async newExams(input) {
    return await this.examRepos.addNew(input)
  }

  async updateExams(input){
    return await this.examRepos.updateEnt({ID: input.ID}, input)
  }

}
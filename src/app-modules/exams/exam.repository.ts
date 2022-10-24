import { DataSource, Repository } from "typeorm";
import { ExamEntity } from "./entities/exam.entity";
import { iLogger } from "../../common/utils/logger/iLogger";
import {Injectable} from "@nestjs/common";

@Injectable()
export class ExamRepository extends Repository<ExamEntity>{

  constructor(
    private readonly dataSource: DataSource,
    private readonly logger: iLogger
  ) {
    super(ExamEntity, dataSource.createEntityManager());
  }

  async getAll(input){
      return this.find()
  }

  async addNew(input){
      let result = await this.createQueryBuilder()
          .insert()
          .into(ExamEntity)
          .values(input)
          .execute()
      return result.generatedMaps
  }

  async updateEnt(condition, data){
      return this.createQueryBuilder()
          .update()
          .set(data)
          .where(condition)
          .execute()
  }


}
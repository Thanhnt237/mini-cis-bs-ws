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
      let {search_string=""} = input
      let expandCondition = ""

      if(search_string){
          expandCondition += ` and lower(p.Name) like '%${search_string.trim().toLowerCase()}%'`
      }

      let sql = `
        select p.*, e.*
        from exams as e 
        left join patients as p on e.Patient_ID = p.ID
        where e.IsActive ${expandCondition}
      `
      return this.query(sql)
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
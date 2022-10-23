import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { WelcomeEntity } from "./entities/welcome.entity";
import { iLogger } from "../../common/utils/logger/iLogger";

@Injectable()
export class WelcomeRepository extends Repository<WelcomeEntity>{
  constructor(
    private readonly dataSource: DataSource,
    private readonly logger: iLogger
  ) {
    super(WelcomeEntity, dataSource.createEntityManager());
  }

  async get(input){
    let sql = `
      select w.ID as Welcome_ID, p.*, w.Services, w.isPayment
      from welcome as w
      left join patients as p on w.Patient_ID = p.ID;
        where w.isActive
    `

    return this.query(sql)
  }

  async saveNew(input){
    return this.save(input)
  }

  async updateWelcome(condition, data){
    return this.createQueryBuilder()
      .update()
      .set(data)
      .where(condition)
      .execute()
  }
}
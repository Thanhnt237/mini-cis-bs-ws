import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { PatientEntity } from "./entities/patient.entity";
import { iLogger } from "../../common/utils/logger/iLogger";
import { UsersEntity } from "../users/entities/users.entity";

@Injectable()
export class PatientRepository extends Repository<PatientEntity>{
  constructor(
    private readonly dataSource: DataSource,
    private readonly logger: iLogger
  ) {
    super(PatientEntity, dataSource.createEntityManager());
  }

  async getPatient(input?: any):Promise<Array<PatientEntity>> {
    let expandCondition = {}

    if(input){
      let {ID} = input;
      if(ID){
        expandCondition["ID"] = ID
      }
    }

    try{
      return await this.find({
        where: expandCondition
      })
    }catch(error){
      throw error
    }
  }

  async addPatient(input: Array<any>): Promise<any> {
    try {
      let result = await this.createQueryBuilder()
        .insert()
        .into(PatientEntity)
        .values(input)
        .execute()
      return result.generatedMaps
    }catch(error){
      this.logger.error(error.message)
      throw new HttpException(error.message, HttpStatus.CONFLICT)
    }
  }

  async updatePatient(input: any): Promise<any> {
    let {condition, data} = input

    try {
      return await this.createQueryBuilder()
        .update(PatientEntity)
        .set(data)
        .where(condition)
        .execute()
    }catch(error){
      this.logger.error(error.message)
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }

}
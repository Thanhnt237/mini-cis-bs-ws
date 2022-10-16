import {DataSource, Repository} from "typeorm";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {iLogger} from "../../common/utils/logger/iLogger";
import { RoomEntity } from "./entities/room.entity";

@Injectable()
export class RoomRepository extends Repository<RoomEntity>{

  constructor(
    private readonly dataSource: DataSource,
    private readonly logger: iLogger
  ) {
    super(RoomEntity, dataSource.createEntityManager());
  }

  async getRoom(input?: any): Promise<Array<RoomEntity>>{
    let expandCondition = {}

    if(input){
      let {ID} = input;
      if(ID){
        expandCondition["ID"] = ID
      }
    }

    try {
      return await this.find({
        where: expandCondition
      })
    }catch (error){
      throw error
    }
  }

  async createRoom(input: Array<any>): Promise<any>{
    try {
      let result = await this.createQueryBuilder()
        .insert()
        .into(RoomEntity)
        .values(input)
        .execute()
      return result.generatedMaps
    }catch(error){
      this.logger.error(error.message)
      throw new HttpException(error.message, HttpStatus.CONFLICT)
    }
  }

  async updateRoom(input: any): Promise<any>{
    let {condition, data} = input

    try {
      return await this.createQueryBuilder()
        .update(RoomEntity)
        .set(data)
        .where(condition)
        .execute()
    }catch(error){
      this.logger.error(error.message)
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }
}
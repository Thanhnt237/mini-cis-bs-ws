import {DataSource, Repository} from "typeorm";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {UsersEntity} from "./entities/users.entity";
import {iLogger} from "../../common/utils/logger/iLogger";

@Injectable()
export class UsersRepository extends Repository<UsersEntity>{

    constructor(
        private readonly dataSource: DataSource,
        private readonly logger: iLogger
    ) {
        super(UsersEntity, dataSource.createEntityManager());
    }

    async getUser(input?: any): Promise<Array<UsersEntity>>{
        let expandCondition = {
            IsActive: true
        }

        if(input){
            let {ID, Email, UserName, search_string=""} = input;
            console.log(input)
            if(ID){
                expandCondition["ID"] = ID
            }

            if(Email){
                expandCondition["Email"] = Email
            }

            if(UserName){
                expandCondition["UserName"] = UserName
            }

            if(search_string.trim()){
                expandCondition["Name"] = search_string.trim()
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

    async addNewUser(input: Array<any>): Promise<any>{
        try {
            let result = await this.createQueryBuilder()
                    .insert()
                    .into(UsersEntity)
                    .values(input)
                    .execute()
            return result.generatedMaps
        }catch(error){
            this.logger.error(error.message)
            throw new HttpException(error.message, HttpStatus.CONFLICT)
        }
    }

    async updateUser(input: any): Promise<any>{
        let {condition, data} = input

        try {
            return await this.createQueryBuilder()
                .update(UsersEntity)
                .set(data)
                .where(condition)
                .execute()
        }catch(error){
            this.logger.error(error.message)
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
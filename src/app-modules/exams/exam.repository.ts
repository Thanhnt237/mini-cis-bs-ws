import { DataSource, Repository } from "typeorm";
import { ExamEntity } from "./entities/exam.entity";
import { iLogger } from "../../common/utils/logger/iLogger";
import { RoomEntity } from "../rooms/entities/room.entity";

export class ExamRepository extends Repository<ExamEntity>{

  // constructor(
  //   private readonly dataSource: DataSource,
  //   private readonly logger: iLogger
  // ) {
  //   // super(ExamEntity, dataSource.createEntityManager());
  // }


}
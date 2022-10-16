import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get, Param, ParseArrayPipe,
  Post,
  Put, Query,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { PatientService } from "./patient.service";
import { endpoint } from "../../common/constants/endpoint";
import { PatientSerializer } from "./serializers/patient.serializer";
import { CreatePatientDto, UpdatePatientDTO } from "./dto/patient.dto";
import { transformArrayEntitiesToSerializer } from "../../common/helpers/transform-serializer.helper";
import { FindByIDDto } from "../../common/dto/findOne.dto";

@Controller(endpoint.patients_prefix)
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class PatientController{

  constructor(
    private readonly patientService: PatientService
  ) {
  }

  @Get(endpoint.patients_get_all_patient)
  async getAllPatient(): Promise<Array<PatientSerializer>> {
    return transformArrayEntitiesToSerializer(await this.patientService.getPatient(), PatientSerializer)
  }

  @Get(endpoint.patients_get_patient_by_ID)
  async getPatientByID(
    @Query() input: FindByIDDto
  ){
    return transformArrayEntitiesToSerializer(await this.patientService.getPatient(input), PatientSerializer)
  }

  @Post(endpoint.patients_add_new_patient)
  async addNewPatient(
    @Body('data', new ParseArrayPipe({ items: CreatePatientDto }))
      data: CreatePatientDto[]
  ): Promise<any>{
    return new PatientSerializer(await this.patientService.addNewPatient(data))
  }

  @Put(endpoint.patients_update_patient)
  async updatePatient(
    @Param('ID') ID: string,
    @Body() input: UpdatePatientDTO
  ){
    return this.patientService.updatePatient(ID, input)
  }

}
import { Injectable } from "@nestjs/common";
import { PatientRepository } from "./patient.repository";
import { PatientEntity } from "./entities/patient.entity";
import { CreatePatientDto, UpdatePatientDTO } from "./dto/patient.dto";

@Injectable()
export class PatientService{
  constructor(
    private readonly patientRepository: PatientRepository
  ) {
  }

  async getPatient(input?: any): Promise<Array<PatientEntity>>{
    return this.patientRepository.getPatient(input)
  }

  async addNewPatient(input: Array<CreatePatientDto>): Promise<PatientEntity>{
    return this.patientRepository.addPatient(input)
  }

  async updatePatient(
    ID: string,
    data: UpdatePatientDTO
  ){
    let standardInput = {
      condition: {
        ID
      },
      data
    }
    return this.patientRepository.updatePatient(standardInput)
  }
}
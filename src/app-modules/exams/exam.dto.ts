import { ExamInterfaces } from "./exam.interfaces";
import { ApiProperty } from "@nestjs/swagger";
import { Allow } from "class-validator";

export class AddNewExamDto implements ExamInterfaces{
  ID: string

  @ApiProperty()
  @Allow()
  Welcome_ID: string;

  @ApiProperty()
  @Allow()
  Patient_ID: string;

  @ApiProperty()
  @Allow()
  Services: string;

  @ApiProperty()
  @Allow()
  ClinicalDiagnosis: string;

  @ApiProperty()
  @Allow()
  DefinitiveDiagnosis: string;

  @ApiProperty()
  @Allow()
  FamilyMed: string;

  @ApiProperty()
  @Allow()
  MainDiseaseCode: string;

  @ApiProperty()
  @Allow()
  MedicalProcedure: string;

  @ApiProperty()
  @Allow()
  Note: string;

  @ApiProperty()
  @Allow()
  PhysicalExamination: string;

  @ApiProperty()
  @Allow()
  SelfMedHistory: string;

  @ApiProperty()
  @Allow()
  Solution: string;

  @ApiProperty()
  @Allow()
  SubDiseaseCode: string;

  @ApiProperty()
  @Allow()
  Symptom: string;
}

export class GetAllExamDto{
  @Allow()
  @ApiProperty()
  search_string: string
}

export class UpdateExamDto {
  @ApiProperty()
  @Allow()
  ID: string

  @ApiProperty()
  @Allow()
  Welcome_ID: string;
  
  @ApiProperty()
  @Allow()
  Exam_Status: string;

  @ApiProperty()
  @Allow()
  Patient_ID: string;

  @ApiProperty()
  @Allow()
  Services: string;

  @ApiProperty()
  @Allow()
  ClinicalDiagnosis: string;

  @ApiProperty()
  @Allow()
  DefinitiveDiagnosis: string;

  @ApiProperty()
  @Allow()
  FamilyMed: string;

  @ApiProperty()
  @Allow()
  MainDiseaseCode: string;

  @ApiProperty()
  @Allow()
  MedicalProcedure: string;

  @ApiProperty()
  @Allow()
  Note: string;

  @ApiProperty()
  @Allow()
  PhysicalExamination: string;

  @ApiProperty()
  @Allow()
  SelfMedHistory: string;

  @ApiProperty()
  @Allow()
  Solution: string;

  @ApiProperty()
  @Allow()
  SubDiseaseCode: string;

  @ApiProperty()
  @Allow()
  Symptom: string;

  @ApiProperty()
  @Allow()
  IsActive: string;
}
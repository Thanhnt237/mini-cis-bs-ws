import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ExamInterfaces } from "../exam.interfaces";

@Entity('exams')
export class ExamEntity implements ExamInterfaces{
  @PrimaryGeneratedColumn('uuid')
  ID: string

  @Column()
  Services: string;

  @Column()
  Patient_ID: string;

  @Column({
    type: "varchar",
    length: 20,
    default: "WAITING"
  })
  Exam_Status: string;

  @Column()
  isActive: boolean
  ClinicalDiagnosis: string;
  DefinitiveDiagnosis: string;
  FamilyMed: string;
  MainDiseaseCode: string;
  MedicalProcedure: string;
  Note: string;
  PhysicalExamination: string;
  SelfMedHistory: string;
  Solution: string;
  SubDiseaseCode: string;
  Symptom: string;
}
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { ExamInterfaces } from "../exam.interfaces";

@Entity('exams')
export class ExamEntity implements ExamInterfaces{
  @PrimaryGeneratedColumn('uuid')
  ID: string

  @Column({
    type: "text",
    nullable: true
  })
  Services: string;

  @Column({
    type: "uuid"
  })
  Patient_ID: string;

  @Column({
    type: "uuid"
  })
  Welcome_ID: string;

  @Column({
    type: "text",
    nullable: true
  })

  @Column({
    type: "varchar",
    length: 20,
    default: "WAITING",
    nullable: true
  })
  Exam_Status: string;

  @Column({
    type: "text",
    nullable: true
  })
  ClinicalDiagnosis: string;

  @Column({
    type: "text",
    nullable: true
  })
  DefinitiveDiagnosis: string;

  @Column({
    type: "text",
    nullable: true
  })
  FamilyMed: string;

  @Column({
    type: "text",
    nullable: true
  })
  MainDiseaseCode: string;

  @Column({
    type: "text",
    nullable: true
  })
  MedicalProcedure: string;

  @Column({
    type: "text",
    nullable: true
  })
  Note: string;

  @Column({
    type: "text",
    nullable: true
  })
  PhysicalExamination: string;

  @Column({
    type: "text",
    nullable: true
  })
  SelfMedHistory: string;

  @Column({
    type: "text",
    nullable: true
  })
  Solution: string;

  @Column({
    type: "text",
    nullable: true
  })
  SubDiseaseCode: string;

  @Column({
    type: "text",
    nullable: true
  })
  Symptom: string;

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn({
    type: "timestamp"
  })
  updateAt: Date
  @Column({
    type: "boolean",
    default: true
  })
  IsActive: boolean
}
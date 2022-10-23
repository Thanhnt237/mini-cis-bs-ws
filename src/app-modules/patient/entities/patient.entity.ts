import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PatientInterface } from "../interfaces/patient.interface";

@Entity('patients')
export class PatientEntity implements PatientInterface{
  @PrimaryGeneratedColumn('uuid')
  ID: string

  @Column({
    type: "text",
    nullable: false
  })
  Name: string

  @Column({
    type: "text",
    nullable: false
  })
  Address: string;

  @Column({
    type: "varchar",
    unique: true,
    nullable: false
  })
  Code: string;

  @Column({
    type: "date",
    nullable: false
  })
  DoB: Date;

  @Column({
    type: "varchar",
    length: 50,
    nullable: false
  })
  Email: string;

  @Column({
    type: "text"
  })
  Nationality: string;

  @Column({
    type: "text"
  })
  Occupation: string;

  @Column({
    type: "varchar",
    length: 20,
    nullable: false
  })
  Phone: string;

  @Column({
    type: "varchar",
    length: 20,
    nullable: false
  })
  Sex: string;

  @Column({
    type: "text"
  })
  Symptom: string;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp'
  })
  UpdatedAt: Date;

  @Column({
    type: "boolean",
    default: true
  })
  Lock: boolean;

  @Column({
    type: "boolean",
    default: true
  })
  IsActive: boolean;
}
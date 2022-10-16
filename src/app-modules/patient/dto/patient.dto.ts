import { PatientInterface } from "../interfaces/patient.interface";
import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Type } from "class-transformer";

export class PatientDto implements PatientInterface{
  ID: string
  name: string
  Address: string;
  Code: string;
  DoB: Date;
  DoExamine: Date;
  Email: string;
  Name: string;
  Nationality: string;
  Occupation: string;
  Phone: string;
  Sex: string;
  Symptom: string;
}

export class CreatePatientDto implements PatientInterface{
  @IsString()
  @IsNotEmpty()
  Address: string;

  @IsString()
  @IsNotEmpty()
  Code: string;

  @IsDate()
  @Type(() => Date)
  DoB: Date;

  @IsDate()
  @Type(() => Date)
  DoExamine: Date;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  Email: string;

  @IsString()
  @IsNotEmpty()
  Name: string;

  @IsString()
  @IsNotEmpty()
  Nationality: string;

  @IsString()
  @IsNotEmpty()
  Occupation: string;

  @IsString()
  @IsNotEmpty()
  Phone: string;

  @IsString()
  @IsNotEmpty()
  Sex: string;

  @IsString()
  @IsNotEmpty()
  Symptom: string;
}

export class UpdatePatientDTO implements PatientInterface{
  Address: string;
  Code: string;
  DoB: Date;
  DoExamine: Date;
  Email: string;
  Name: string;
  Nationality: string;
  Occupation: string;
  Phone: string;
  Sex: string;
  Symptom: string;

}

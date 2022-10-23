import { PatientInterface } from "../interfaces/patient.interface";
import { Allow, IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty, ApiTags } from "@nestjs/swagger";

export class PatientDto implements PatientInterface{
  ID: string
  name: string
  Address: string;
  Code: string;
  DoB: Date;
  Email: string;
  Name: string;
  Nationality: string;
  Occupation: string;
  Phone: string;
  Sex: string;
  Symptom: string;
}

export class GetAllDto {
  @ApiProperty()
  @Allow()
  search_string: string
}

export class CreatePatientDto implements PatientInterface{
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Address: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Code: string;

  @IsDate()
  @Type(() => Date)
  @ApiProperty()
  DoB: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  Email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Nationality: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Occupation: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Sex: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Symptom: string;
}

export class ImportPatient {
  @ApiProperty({
    type: [CreatePatientDto]
  })
  @Type(() => CreatePatientDto)
  data: CreatePatientDto[]
}

export class UpdatePatientDTO implements PatientInterface{
  ID: string

  @ApiProperty()
  @Allow()
  Address: string;

  @ApiProperty()
  @Allow()
  Code: string;

  @ApiProperty()
  @Allow()
  DoB: Date;

  @ApiProperty()
  @Allow()
  Email: string;

  @ApiProperty()
  @Allow()
  Name: string;

  @ApiProperty()
  @Allow()
  Nationality: string;

  @ApiProperty()
  @Allow()
  Occupation: string;

  @ApiProperty()
  @Allow()
  Phone: string;

  @ApiProperty()
  @Allow()
  Sex: string;

  @ApiProperty()
  @Allow()
  Symptom: string;
}

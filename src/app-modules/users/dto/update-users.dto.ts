import { IsBoolean, IsEmail, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDTO{
  @ApiProperty()
  @IsString()
  readonly ID: string

  @ApiProperty()
  @IsEmail()
  readonly Email?: string;

  @ApiProperty()
  @IsString()
  readonly Name?: string | null;

  @ApiProperty()
  @IsString()
  Password?: string;

  @ApiProperty()
  @IsString()
  readonly Phone?: string;

  @ApiProperty()
  @IsString()
  readonly Role?: string;

  @ApiProperty()
  @IsString()
  readonly Room_ID?: string;

  @ApiProperty()
  @IsString()
  readonly Speciality?: string;

  @ApiProperty()
  @IsString()
  readonly UserName?: string;

  @ApiProperty()
  @IsBoolean()
  readonly Lock?: boolean

  @ApiProperty()
  @IsBoolean()
  readonly isActive?: boolean
}
import { UsersInterface } from "../interfaces/users.interface";
import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Expose } from "class-transformer";

export class UpdateUserDTO{
  @IsString()
  readonly ID: string

  @IsEmail()
  readonly Email?: string;

  @IsString()
  readonly Name?: string | null;

  @IsString()
  Password?: string;

  @IsString()
  readonly Phone?: string;

  @IsString()
  readonly Role?: string;

  @IsString()
  readonly Room_ID?: string;

  @IsString()
  readonly Speciality?: string;

  @IsString()
  readonly UserName?: string;

  @IsBoolean()
  readonly Lock?: boolean

  @IsBoolean()
  readonly isActive?: boolean
}
import { WelcomeInterface } from "./welcome.interface";
import { ApiProperty } from "@nestjs/swagger";
import { Allow, IsString } from "class-validator";

export class WelcomeDto{

}

export class GetAllWelcomeDto{
  @Allow()
  @ApiProperty()
  search_string: string
}

export class AddNewWelcomeDto implements WelcomeInterface {
  ID: string;

  @ApiProperty()
  @Allow()
  Patient_ID: string;

  @ApiProperty()
  @Allow()
  Services: string;
}

export class UpdateWelcomeDto {
  @IsString()
  @ApiProperty()
  ID: string
  @ApiProperty()
  @Allow()
  IsPayment: boolean
  @ApiProperty()
  @Allow()
  IsActive: boolean

}
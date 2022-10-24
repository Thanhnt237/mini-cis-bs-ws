import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AddNewWelcomeDto, GetAllWelcomeDto, UpdateWelcomeDto } from "./welcome.dto";
import { WelcomeService } from "./welcome.service";

@Controller('welcome')
@ApiTags('welcome')
export class WelcomeController{

  constructor(
    private readonly welcomeService: WelcomeService
  ) {
  }

  @Post('getAllWelcome')
  async getAllWelcome(
    @Body() input: GetAllWelcomeDto
  ){
    return this.welcomeService.getAll(input)
  }

  @Post('newWelcome')
  async newWelcome(
    @Body() input: AddNewWelcomeDto
  ){
    return this.welcomeService.newWelcome(input)
  }

  @Post('updateWelcome')
  async updateWelcome(
    @Body() input: UpdateWelcomeDto
  ){
    return this.welcomeService.updateWelcome(input)
  }

}
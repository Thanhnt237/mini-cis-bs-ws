import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@Controller('service')
@ApiTags('services')
export class ServiceController{
  @Post()
  async getAllService() {

  }

  @Post()
  async addNewService() {

  }

  @Post()
  async updateService() {

  }

}
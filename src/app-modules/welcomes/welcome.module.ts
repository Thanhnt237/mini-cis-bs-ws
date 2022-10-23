import { Module } from "@nestjs/common";
import { WelcomeController } from "./welcome.controller";
import { WelcomeService } from "./welcome.service";
import { WelcomeRepository } from "./welcome.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WelcomeEntity } from "./entities/welcome.entity";
import { iCommonModule } from "../../common/module/common-module/common.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([WelcomeEntity]),
    iCommonModule
  ],
  controllers: [WelcomeController],
  providers: [
    WelcomeService,
    WelcomeRepository
  ]
})
export class WelcomeModule{

}
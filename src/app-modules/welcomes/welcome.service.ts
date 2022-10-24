import { Injectable } from "@nestjs/common";
import { WelcomeRepository } from "./welcome.repository";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class WelcomeService{

  constructor(
    @InjectRepository(WelcomeRepository)
    private readonly welcomeRepos: WelcomeRepository
  ) {
  }

  async getAll(input){
    return this.welcomeRepos.get(input)
  }

  async newWelcome(input){
    return this.welcomeRepos.saveNew(input)
  }

  async updateWelcome(input){
    return this.welcomeRepos.updateWelcome({ID: input.ID}, input)
  }

}
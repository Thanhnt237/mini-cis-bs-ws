import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { WelcomeInterface } from "../welcome.interface";

@Entity('welcome')
export class WelcomeEntity implements WelcomeInterface{
  @PrimaryGeneratedColumn('uuid')
  ID: string

  @Column()
  Services: string;

  @Column()
  Patient_ID: string;

  @Column({
    default: false
  })
  isPayment: boolean;

  @Column({
    type: "boolean",
    default: true
  })
  isActive: boolean
}
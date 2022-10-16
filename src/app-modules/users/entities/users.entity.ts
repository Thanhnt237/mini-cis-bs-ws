import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn, ManyToOne, ManyToMany
} from "typeorm";

import { UsersInterface } from '../interfaces/users.interface';
import { RoomEntity } from "../../rooms/entities/room.entity";

@Entity({ name: 'users' })
export class UsersEntity implements UsersInterface {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column({
    type: "text",
    nullable: false
  })
  Name: string;

  @Column({
    type: "varchar",
    length: 50,
    unique: true,
    nullable: false
  })
  UserName: string;

  @Column({
    type: "varchar",
    length: 50,
    unique: true,
    nullable: true
  })
  Email: string;

  @Column({
    type: "varchar",
    length: 220,
    nullable: false
  })
  Password: string;

  @Column({
    type: "varchar",
    length: 10,
    nullable: true
  })
  Phone: string;

  @Column({
    type: "varchar",
    length: 20,
    nullable: true
  })
  Role: string;

  @Column({
    type: "varchar",
    length: 20,
    nullable: true
  })
  Speciality: string;

  @ManyToMany(type => RoomEntity, room => room.ID)
  @Column({
    type: "varchar",
    length: 20,
    nullable: true
  })
  Room_ID: string;

  @CreateDateColumn({
    name: 'created_at'
  })
  CreatedAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp'
  })
  UpdatedAt: Date;

  @Column({
    type: "boolean",
    default: true
  })
  Lock: boolean;

  @Column({
    type: "boolean",
    default: true
  })
  IsActive: boolean;
}
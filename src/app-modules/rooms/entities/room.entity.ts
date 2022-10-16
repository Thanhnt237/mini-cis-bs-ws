import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class RoomEntity {
  @PrimaryGeneratedColumn('uuid')
  ID: string

  @Column({
    type: "text",
    nullable: false
  })
  Name: string

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
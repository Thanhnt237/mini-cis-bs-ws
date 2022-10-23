import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('rooms')
export class RoomEntity {
  @PrimaryGeneratedColumn('uuid')
  ID: string

  @Column({
    type: "text",
    nullable: false
  })
  Name: string

  @Column({

  })

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
import { BaseEntity, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => User, (user) => user.roles, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  users: User[];
}

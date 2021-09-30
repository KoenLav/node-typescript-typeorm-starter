
import { Entity, PrimaryGeneratedColumn, JoinTable, Column, BaseEntity, ManyToMany } from "typeorm";
import { Role } from "./role";


@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "text", nullable: true })
  name: string;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "text" })
  password: string;

  @ManyToMany(() => Role, (role) => role.users, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinTable({
    name: 'user_roles',
  })
  roles: Role[];
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Length, IsEmail } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(3, 30)
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column()
  isActive: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}

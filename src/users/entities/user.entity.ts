import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombres: string;
  @Column()
  apellidos: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombres: string;
  @Column()
  apellidos: string;
  @Column()
  email: string;
}

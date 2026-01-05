import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HomeHero {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  titulo: string;
  @Column()
  descripcion: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Servicio {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  titulo: string;
  @Column()
  descripcion: string;
}

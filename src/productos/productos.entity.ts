import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Productos {
  @Column()
  id?: string;
  @Column()
  nombre: string;
  @Column()
  descripcion: string;
}

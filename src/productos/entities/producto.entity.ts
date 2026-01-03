import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


// con las entidades normalmente creamos las tablas de manera eficiente
@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  descripcion: string;
}

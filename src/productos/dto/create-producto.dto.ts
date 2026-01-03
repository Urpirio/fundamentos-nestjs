import { IsString } from 'class-validator';

// El DTO el marco por donde pasan los datos cuando vienen desde el frontend o sea es los datos que no obligatorios para la tabla
export class CreateProductoDto {
  @IsString()
  nombre: string;
  @IsString()
  descripcion: string;
}

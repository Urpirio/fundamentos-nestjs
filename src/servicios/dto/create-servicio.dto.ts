import { IsString } from 'class-validator';

export class CreateServicioDto {
  @IsString()
  titulo: string;
  @IsString()
  descripcion: string;
}

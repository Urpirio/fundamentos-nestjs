import { IsString } from 'class-validator';

export class CreateHomeHeroDto {
  @IsString()
  titulo: string;
  @IsString()
  descripcion: string;
}

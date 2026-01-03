import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
// Esto es para actulizar los elementos
export class UpdateProductoDto extends PartialType(CreateProductoDto) {}

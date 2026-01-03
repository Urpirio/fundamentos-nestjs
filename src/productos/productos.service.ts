import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private ProductosRepository: Repository<Producto>,
  ) {}
  async create(createProductoDto: CreateProductoDto) {
    const producto = this.ProductosRepository.create(createProductoDto);
    return await this.ProductosRepository.save(producto);
  }

  // Esto nos permite encontrar todos los elementos de manera rapida
  async findAll() {
    return await this.ProductosRepository.find();
  }

  async findOne(id: number) {

    const producto = await this.ProductosRepository.findOneBy({ id });

    // Podemos ponernos creativos con condicionales y asi mismo un monton de cosas mas
    if (!producto) {
      return {
        status: 404,
      };
    }
    return producto;
  }

  // podemos actulizar las filas de manera rapida 
  async update(id: number, updateProductoDto: UpdateProductoDto) {
    return await this.ProductosRepository.update(id, updateProductoDto);
  }

  async remove(id: number) {
    return await this.ProductosRepository.delete(id);
  }
}

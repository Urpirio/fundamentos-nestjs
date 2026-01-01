import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Productos } from './productos.entity';

@Controller('productos')
export class ProductosController {
  constructor(private ProductosService: ProductosService) {
    ProductosService.FindAll();
  }
  @Get()
  FindAll() {
    return this.ProductosService.FindAll();
  }
  @Get(':id')
  FindOne(@Param('id') id: string) {
    return this.ProductosService.FindOne(id);
  }

  @Patch(':id')
  Update(@Param('id') id: string, @Body() updatebody: Productos) {
    return this.ProductosService.Update(id, updatebody);
  }

  @Post()
  Create(@Body() Create: Productos) {
    return this.ProductosService.Create(Create);
  }
}

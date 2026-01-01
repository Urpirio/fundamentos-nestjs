import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
// import { DataSource } from 'typeorm';

@Module({
  imports: [ProductosModule],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}

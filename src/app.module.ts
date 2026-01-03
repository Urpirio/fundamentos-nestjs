import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { ServiciosModule } from './servicios/servicios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: "PepeApp12@",
      database: 'test-nestjs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductosModule,
    UsersModule,
    ServiciosModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

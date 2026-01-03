import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { ServiciosModule } from './servicios/servicios.module';
import { env } from 'env/env';

//  type: 'mysql',
//       host: env.MYSQLHOST,
//       port: parseInt(`${env.MYSQLPORT}`),
//       username: env.MYSQLUSER,
//       password: env.MYSQLPASSWORD,
//       database: env.MYSQLDATABASE,
//       autoLoadEntities: true,
//       synchronize: true,
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQLHOST ?? 'localhost',
      port: parseInt(`${process.env.MYSQLPORT}`) ?? 3006,
      username: env.MYSQLUSER ?? 'root',
      password: process.env.MYSQLPASSWORD ?? 'PepeApp12@',
      database: process.env.MYSQLDATABASE  ?? 'test-nestjs',
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

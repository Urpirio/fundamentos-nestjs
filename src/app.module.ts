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
      host: "mysql.railway.internal",
      port: 3006,
      username: 'root',
      password: "DIXyTKsVdTwzwtoTUWNJnWgajsilXLbY",
      database: "railway",
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

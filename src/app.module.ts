import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { ServiciosModule } from './servicios/servicios.module';
import { HomeHeroModule } from './home-hero/home-hero.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQLHOST ?? 'localhost',
      port: parseInt(`${process.env.MYSQLPORT}`) ?? 3006,
      username: process.env.MYSQLUSER ?? 'root',
      password: process.env.MYSQLPASSWORD ?? 'PepeApp12@',
      database: process.env.MYSQLDATABASE ?? 'test-nestjs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductosModule,
    UsersModule,
    ServiciosModule,
    HomeHeroModule,
    AuthModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

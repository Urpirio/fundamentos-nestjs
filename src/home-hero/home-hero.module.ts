import { Module } from '@nestjs/common';
import { HomeHeroService } from './home-hero.service';
import { HomeHeroController } from './home-hero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeHero } from './entities/home-hero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HomeHero])],
  controllers: [HomeHeroController],
  providers: [HomeHeroService],
})
export class HomeHeroModule {}

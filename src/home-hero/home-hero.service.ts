import { Injectable } from '@nestjs/common';
import { CreateHomeHeroDto } from './dto/create-home-hero.dto';
import { UpdateHomeHeroDto } from './dto/update-home-hero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HomeHero } from './entities/home-hero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HomeHeroService {
  constructor(
    @InjectRepository(HomeHero)
    private HomeHeroRepository: Repository<HomeHero>,
  ) {}
  create(createHomeHeroDto: CreateHomeHeroDto) {
    return 'This action adds a new homeHero';
  }

  async findAll() {
    return await this.HomeHeroRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} homeHero`;
  }

  update(id: number, updateHomeHeroDto: UpdateHomeHeroDto) {
    return `This action updates a #${id} homeHero`;
  }

  remove(id: number) {
    return `This action removes a #${id} homeHero`;
  }
}

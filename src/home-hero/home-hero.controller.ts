import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomeHeroService } from './home-hero.service';
import { CreateHomeHeroDto } from './dto/create-home-hero.dto';
import { UpdateHomeHeroDto } from './dto/update-home-hero.dto';

@Controller('home-hero')
export class HomeHeroController {
  constructor(private readonly homeHeroService: HomeHeroService) {}

  @Post()
  create(@Body() createHomeHeroDto: CreateHomeHeroDto) {
    return this.homeHeroService.create(createHomeHeroDto);
  }

  @Get()
  findAll() {
    return this.homeHeroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeHeroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomeHeroDto: UpdateHomeHeroDto) {
    return this.homeHeroService.update(+id, updateHomeHeroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeHeroService.remove(+id);
  }
}

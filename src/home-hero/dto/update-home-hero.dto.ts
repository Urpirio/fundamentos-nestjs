import { PartialType } from '@nestjs/mapped-types';
import { CreateHomeHeroDto } from './create-home-hero.dto';

export class UpdateHomeHeroDto extends PartialType(CreateHomeHeroDto) {}

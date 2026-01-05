import { Injectable } from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Servicio } from './entities/servicio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicio)
    private ServiciosRepository: Repository<Servicio>,
  ) {}

  async create(createServicioDto: CreateServicioDto) {
    const data = this.ServiciosRepository.create(createServicioDto);
    return await this.ServiciosRepository.save(data);
  }

  async findAll() {
    const data = await this.ServiciosRepository.find();
    if (data.length == 0) {
      return [];
    } else {
      return await this.ServiciosRepository.find();
    }
  }

  async findOne(id: number) {
    return await this.ServiciosRepository.findBy({ id });
  }

  async update(id: number, updateServicioDto: UpdateServicioDto) {
    return await this.ServiciosRepository.update(id, updateServicioDto);
  }

  async remove(id: number) {
    return await this.ServiciosRepository.delete(id);
  }
}

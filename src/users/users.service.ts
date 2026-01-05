import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = this.UserRepository.create(createUserDto);
    return await this.UserRepository.save(user);
  }

  async findAll() {
    return await this.UserRepository.find();
  }

  async findOne(email: string) {
    return await this.UserRepository.findBy({ email });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.UserRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.UserRepository.delete(id);
  }
}

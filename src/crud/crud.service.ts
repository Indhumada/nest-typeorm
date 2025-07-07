import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudEntity } from './entities/crud.entity';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';

@Injectable()
export class CrudService {
  constructor(
    @InjectRepository(CrudEntity)
    private crudRepo: Repository<CrudEntity>,
  ) {}

  async createCrud(createDto: CreateCrudDto): Promise<string> {
    await this.crudRepo.save(createDto);
    return 'DATA ADDED';
  }

  async findAll(): Promise<CrudEntity[]> {
    return this.crudRepo.find();
  }

  async findById(id: number): Promise<CrudEntity | null> {
    return this.crudRepo.findOneBy({ id });
  }

  async updateCrud(id: number, updateDto: Partial<CrudEntity>): Promise<string> {
  await this.crudRepo.update(id, updateDto);
  return 'DATA UPDATED';
}

  async deleteCrud(id: number): Promise<string> {
    await this.crudRepo.delete(id);
    return 'DATA DELETED';
  }
}
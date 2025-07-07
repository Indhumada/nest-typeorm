import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { CrudEntity } from './entities/crud.entity';

@Controller()
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Post('/crud')
  createCrud(@Body() createDto: CreateCrudDto) {
    return this.crudService.createCrud(createDto);
  }

  @Get('/crud')
  findAll() {
    return this.crudService.findAll();
  }

  @Get('/crud/:id')
  findById(@Param('id') id: number) {
    return this.crudService.findById(id);
  }

  @Put('/crud/:id')
updateCrud(@Param('id') id: number, @Body() updateDto: Partial<CrudEntity>) {
  return this.crudService.updateCrud(id, updateDto);
}


  @Delete('/crud/:id')
  deleteCrud(@Param('id') id: number) {
    return this.crudService.deleteCrud(id);
  }
}
import { Repository } from 'typeorm';
import { CrudEntity } from './entities/crud.entity';
import { CreateCrudDto } from './dto/create-crud.dto';
export declare class CrudService {
    private crudRepo;
    constructor(crudRepo: Repository<CrudEntity>);
    createCrud(createDto: CreateCrudDto): Promise<string>;
    findAll(): Promise<CrudEntity[]>;
    findById(id: number): Promise<CrudEntity | null>;
    updateCrud(id: number, updateDto: Partial<CrudEntity>): Promise<string>;
    deleteCrud(id: number): Promise<string>;
}

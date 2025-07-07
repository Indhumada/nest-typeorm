import { CrudService } from './crud.service';
import { CreateCrudDto } from './dto/create-crud.dto';
import { CrudEntity } from './entities/crud.entity';
export declare class CrudController {
    private readonly crudService;
    constructor(crudService: CrudService);
    createCrud(createDto: CreateCrudDto): Promise<string>;
    findAll(): Promise<CrudEntity[]>;
    findById(id: number): Promise<CrudEntity | null>;
    updateCrud(id: number, updateDto: Partial<CrudEntity>): Promise<string>;
    deleteCrud(id: number): Promise<string>;
}

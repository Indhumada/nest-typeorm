"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudController = void 0;
const common_1 = require("@nestjs/common");
const crud_service_1 = require("./crud.service");
const create_crud_dto_1 = require("./dto/create-crud.dto");
let CrudController = class CrudController {
    crudService;
    constructor(crudService) {
        this.crudService = crudService;
    }
    createCrud(createDto) {
        return this.crudService.createCrud(createDto);
    }
    findAll() {
        return this.crudService.findAll();
    }
    findById(id) {
        return this.crudService.findById(id);
    }
    updateCrud(id, updateDto) {
        return this.crudService.updateCrud(id, updateDto);
    }
    deleteCrud(id) {
        return this.crudService.deleteCrud(id);
    }
};
exports.CrudController = CrudController;
__decorate([
    (0, common_1.Post)('/crud'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_crud_dto_1.CreateCrudDto]),
    __metadata("design:returntype", void 0)
], CrudController.prototype, "createCrud", null);
__decorate([
    (0, common_1.Get)('/crud'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CrudController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/crud/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CrudController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/crud/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], CrudController.prototype, "updateCrud", null);
__decorate([
    (0, common_1.Delete)('/crud/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CrudController.prototype, "deleteCrud", null);
exports.CrudController = CrudController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [crud_service_1.CrudService])
], CrudController);
//# sourceMappingURL=crud.controller.js.map
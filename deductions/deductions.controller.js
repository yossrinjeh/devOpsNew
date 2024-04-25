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
exports.DeductionsController = void 0;
const common_1 = require("@nestjs/common");
const deductions_service_1 = require("./deductions.service");
const decorators_1 = require("../auth/common/decorators");
let DeductionsController = class DeductionsController {
    constructor(deductionsService) {
        this.deductionsService = deductionsService;
    }
    async createDeduction(createDeductionDto) {
        return this.deductionsService.createDeduction(createDeductionDto);
    }
    findAll() {
        return this.deductionsService.findAll();
    }
    findOne(id) {
        return this.deductionsService.findOne(id);
    }
    update(id, updateDeductionDto) {
        return this.deductionsService.update(id, updateDeductionDto);
    }
    remove(id) {
        return this.deductionsService.remove(id);
    }
};
exports.DeductionsController = DeductionsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeductionsController.prototype, "createDeduction", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeductionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeductionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DeductionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeductionsController.prototype, "remove", null);
exports.DeductionsController = DeductionsController = __decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Controller)('deductions'),
    __metadata("design:paramtypes", [deductions_service_1.DeductionsService])
], DeductionsController);
//# sourceMappingURL=deductions.controller.js.map
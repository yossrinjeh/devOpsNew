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
exports.AllowancesController = void 0;
const common_1 = require("@nestjs/common");
const allowances_service_1 = require("./allowances.service");
const decorators_1 = require("../auth/common/decorators");
let AllowancesController = class AllowancesController {
    constructor(allowancesService) {
        this.allowancesService = allowancesService;
    }
    async createAllowance(createAllowanceDto) {
        return this.allowancesService.createAllowance(createAllowanceDto);
    }
    findAll() {
        return this.allowancesService.findAll();
    }
    findOne(id) {
        return this.allowancesService.findOne(id);
    }
    update(id, updateAllowanceDto) {
        return this.allowancesService.update(id, updateAllowanceDto);
    }
    remove(id) {
        return this.allowancesService.remove(id);
    }
    find(id) {
        return this.allowancesService.find(id);
    }
};
exports.AllowancesController = AllowancesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AllowancesController.prototype, "createAllowance", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AllowancesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AllowancesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AllowancesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AllowancesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/getUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AllowancesController.prototype, "find", null);
exports.AllowancesController = AllowancesController = __decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Controller)('allowances'),
    __metadata("design:paramtypes", [allowances_service_1.AllowancesService])
], AllowancesController);
//# sourceMappingURL=allowances.controller.js.map
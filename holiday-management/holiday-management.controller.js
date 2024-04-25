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
exports.HolidayManagementController = void 0;
const common_1 = require("@nestjs/common");
const holiday_management_service_1 = require("./holiday-management.service");
const create_holiday_management_dto_1 = require("./dto/create-holiday-management.dto");
let HolidayManagementController = class HolidayManagementController {
    constructor(holidayManagementService) {
        this.holidayManagementService = holidayManagementService;
    }
    async createHoliday(createHolidayDto) {
        return this.holidayManagementService.createHoliday(createHolidayDto);
    }
    findAll() {
        return this.holidayManagementService.findAll();
    }
    findOne(id) {
        return this.holidayManagementService.findOne(id);
    }
    update(id, updateHolidayManagementDto) {
        return this.holidayManagementService.update(id, updateHolidayManagementDto);
    }
    remove(id) {
        return this.holidayManagementService.remove(id);
    }
};
exports.HolidayManagementController = HolidayManagementController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_holiday_management_dto_1.CreateHolidayManagementDto]),
    __metadata("design:returntype", Promise)
], HolidayManagementController.prototype, "createHoliday", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HolidayManagementController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HolidayManagementController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HolidayManagementController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HolidayManagementController.prototype, "remove", null);
exports.HolidayManagementController = HolidayManagementController = __decorate([
    (0, common_1.Controller)('holiday-management'),
    __metadata("design:paramtypes", [holiday_management_service_1.HolidayManagementService])
], HolidayManagementController);
//# sourceMappingURL=holiday-management.controller.js.map